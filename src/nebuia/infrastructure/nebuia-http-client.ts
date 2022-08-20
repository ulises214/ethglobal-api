import axios from 'axios';
import { NebuiaApiResponse } from '../domain/NebuiaApiResponse';
import { NebuiaKeys, NebuiaKeysUtils } from '../domain/NebuiaKeys';

type RequestBody =
  | Record<string, unknown>
  | Array<Record<string, unknown>>
  | FormData
  | undefined;
export class NebuiaHttpClient {
  constructor(private readonly keys: NebuiaKeys) {}
  private readonly nebuia = 'api.nebuia.com';

  private encodeUrl({
    path,
    report,
  }: {
    path: string;
    report: string;
  }): string {
    return `https://${this.nebuia}/api/v1/${path}?report=${report}`;
  }

  private async postPut<T>({
    body,
    method,
    path,
    headers,
    report,
  }: {
    report: string;
    path: string;
    body: RequestBody;
    method: 'post' | 'put';
    headers?: Record<string, string>;
  }): NebuiaApiResponse<T> {
    const url = this.encodeUrl({ path, report });
    const response = await axios[method](url, body, {
      headers: { ...NebuiaKeysUtils.json(this.keys), ...headers },
    });
    return response.data;
  }

  protected async get<T>(path: string, report: string): NebuiaApiResponse<T> {
    const url = this.encodeUrl({ path, report });
    const response = await axios.get<NebuiaApiResponse<T>>(url, {
      headers: NebuiaKeysUtils.json(this.keys),
    });
    return response.data;
  }

  protected async post<T>(
    path: string,
    report: string,
    body?: RequestBody,
  ): NebuiaApiResponse<T> {
    return this.postPut({ path, body, method: 'post', report });
  }
  protected async put<T>(
    path: string,
    report: string,
    body?: RequestBody,
  ): NebuiaApiResponse<T> {
    return this.postPut({ path, body, method: 'put', report });
  }

  protected async document(
    path: string,
    report: string,
  ): NebuiaApiResponse<Buffer> {
    try {
      const url = this.encodeUrl({ path, report });
      const response = await axios.get<Buffer>(url, {
        headers: NebuiaKeysUtils.json(this.keys),
        responseType: 'arraybuffer',
      });
      return { status: true, payload: response.data };
    } catch (error) {
      return {
        status: false,
        messages: error instanceof Error ? error.message : String(error),
      };
    }
  }
}
