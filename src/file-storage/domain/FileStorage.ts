export type FileExtension = 'jpg' | 'png' | 'pdf';
export type FileType = 'report' | 'signature';
export interface FileStorageService {
  upload(arg0: {
    file: Buffer;
    identifier: string;
    extension: FileExtension;
    type: FileType;
  }): Promise<boolean>;
  download(arg0: {
    type: FileType;
    identifier: string;
    extension: FileExtension;
  }): Promise<Buffer | undefined>;
}
export const FileStorageServiceToken = Symbol('FileStorageService');
