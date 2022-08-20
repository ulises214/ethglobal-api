import { registerAs } from '@nestjs/config';

export default registerAs('nebuia', () => ({
  apiKey: process.env.NEBUIA_API_KEY,
  apiSecret: process.env.NEBUIA_API_SECRET,
  timeKey: process.env.NEBUIA_TIME_KEY,
}));
