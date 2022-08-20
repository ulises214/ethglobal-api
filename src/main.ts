import { ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './app/config/app-config.service';
import { AllExceptionsFilter } from './common/filters/all-exception';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const appConfig: AppConfigService = app.get(AppConfigService);
  const httpAdapter = app.get(HttpAdapterHost);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  app.enableCors({ origin: appConfig.webHost, credentials: true });
  await app.listen(appConfig.port);
  console.log(
    `Application ${appConfig.name} is running on: ${await app.getUrl()}`,
  );
}
bootstrap();
