export abstract class NebuiaKeysUtils {
  static json(keys: NebuiaKeys): Record<string, string> {
    return {
      api_key: keys.apiKey,
      api_secret: keys.secretKey,
      time_key: keys.timeKey,
    };
  }
}
export interface NebuiaKeys {
  apiKey: string;
  secretKey: string;
  timeKey: string;
}
