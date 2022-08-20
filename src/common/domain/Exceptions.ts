export abstract class DomainException extends Error {
  constructor(message: string, public readonly localizedMessage: string) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}
export class SignedReportNotFoundException extends DomainException {
  constructor(message: string) {
    super(message, 'Signed report not found');
    this.name = 'SignedReportNotFoundException';
  }
}
export class InvalidNebuiaKeysException extends DomainException {
  constructor(message: string) {
    super(message, 'Invalid nebuia keys');
    this.name = 'InvalidNebuiaKeysException';
  }
}
export class NebuiaReportNotFoundException extends DomainException {
  constructor(message: string) {
    super(message, 'Report not found');
    this.name = 'InvalidNebuiaReportException';
  }
}
export class NetworkException extends DomainException {
  constructor(message: string, localizedMessage: string) {
    super(message, localizedMessage);
    this.name = 'NetworkException';
  }
}
export class UnknownNebuiaException extends DomainException {
  constructor(message: string) {
    super(message, 'Unknown nebuia exception');
    this.name = 'UnknownNebuiaException';
  }
}

export class UnknownException extends DomainException {
  constructor(message: string, localizedMessage: string) {
    super(message, localizedMessage);
    this.name = 'UnknownException';
  }
}
