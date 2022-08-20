import { registerAs } from '@nestjs/config';

export default registerAs('web3Storage', () => ({
  token: process.env.WEB3_STORAGE_TOKEN,
}));
