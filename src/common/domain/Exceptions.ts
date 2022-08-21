export abstract class DomainException extends Error {
  constructor(message: string, public readonly localizedMessage: string) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}
export class NetworkException extends DomainException {
  constructor(message: string, localizedMessage: string) {
    super(message, localizedMessage);
    this.name = 'NetworkException';
  }
}

export class UnknownException extends DomainException {
  constructor(message: string, localizedMessage: string) {
    super(message, localizedMessage);
    this.name = 'UnknownException';
  }
}
