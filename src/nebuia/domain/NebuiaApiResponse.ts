type ApiResultSuccess<T> = { status: true; payload: T };
type ApiResponseError = { status: false; messages: string };

export type NebuiaApiResponse<T> = Promise<
  ApiResponseError | ApiResultSuccess<T>
>;
