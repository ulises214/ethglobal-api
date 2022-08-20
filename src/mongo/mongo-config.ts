import { registerAs } from '@nestjs/config';

export default registerAs('mongo', () => ({
  url: process.env.MONGO_URL,
  db: process.env.MONGO_DB_NAME,
}));
