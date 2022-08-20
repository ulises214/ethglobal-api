import { registerAs } from '@nestjs/config';
export default registerAs('zoom', () => ({
  sdkKey: process.env.ZOOM_SDK_KEY,
  sdkSecret: process.env.ZOOM_SDK_SECRET,
}));
