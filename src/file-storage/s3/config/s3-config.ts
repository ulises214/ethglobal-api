import { registerAs } from '@nestjs/config';

export default registerAs('s3', () => ({
  url: process.env.S3_URL,
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  bucket: process.env.S3_BUCKET,
  secure: process.env.S3_SECURE,
  port: process.env.S3_PORT,
}));
