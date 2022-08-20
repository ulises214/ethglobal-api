import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import {
  DomainException,
  NetworkException,
  UnknownException,
  UnknownNebuiaException,
} from '../domain/Exceptions';
type ComplexResponseType = {
  response: {
    message: string;
  };
};
type SimpleResponseType = {
  message: string;
};
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger('ExceptionFilter');
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  private getResponseMessage(exception: HttpException): string {
    return exception.getResponse().hasOwnProperty('response')
      ? (exception.getResponse() as ComplexResponseType)['response']['message']
      : (exception.getResponse() as SimpleResponseType)['message'];
  }
  private getErrorMessage(exception: Error | unknown): string {
    const message =
      exception instanceof Error ? exception.message : String(exception);
    const stack = exception instanceof Error ? exception.stack : '';
    this.logger.error(message, stack, 'Unhandled Exception');
    return message;
  }
  private getDomainMessage(exception: DomainException): string {
    if (exception instanceof UnknownException) {
      this.logger.error(exception.message, exception.stack, 'UnknownException');
    }
    if (exception instanceof UnknownNebuiaException) {
      this.logger.error(
        exception.message,
        exception.stack,
        'UnknownNebuiaException',
      );
    }
    if (exception instanceof NetworkException) {
      this.logger.error(exception.message, exception.stack, 'NetworkException');
    }
    return exception.localizedMessage;
  }
  catch(exception: unknown, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.BAD_REQUEST;
    const message =
      exception instanceof DomainException
        ? this.getDomainMessage(exception)
        : exception instanceof HttpException
        ? this.getResponseMessage(exception)
        : this.getErrorMessage(exception);
    const responseBody = {
      message,
      statusCode: httpStatus,
      timestamp: new Date().toISOString(),
      path: httpAdapter.getRequestUrl(ctx.getRequest()),
    };

    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}
