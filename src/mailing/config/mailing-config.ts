import { registerAs } from '@nestjs/config';

export default registerAs('nodeMailer', () => ({
  host: process.env.NODE_MAILER_HOST,
  port: process.env.NODE_MAILER_PORT,
  user: process.env.NODE_MAILER_USER,
  pass: process.env.NODE_MAILER_PASS,
  logger: process.env.NODE_MAILER_LOGGER,
  debug: process.env.NODE_MAILER_DEBUG,
  emisor: process.env.NODE_MAILER_EMISOR,
}));
