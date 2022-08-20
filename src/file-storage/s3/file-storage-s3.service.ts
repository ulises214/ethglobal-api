import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'minio';
import { MINIO_CONNECTION } from 'nestjs-minio';
import { FileStorageService, FileType } from '../domain/FileStorage';
import { S3ConfigService } from './config/s3-config.service';

@Injectable()
export class S3FileStorageService implements FileStorageService {
  constructor(
    @Inject(MINIO_CONNECTION) private readonly client: Client,
    private readonly config: S3ConfigService,
  ) {}
  async upload({
    extension,
    file,
    identifier,
    type,
  }: {
    type: FileType;
    file: Buffer;
    identifier: string;
    extension: string;
  }): Promise<boolean> {
    try {
      await this.client.putObject(
        this.config.bucket,
        `${type}/${identifier}.${extension}`,
        file,
      );
      return true;
    } catch (error) {
      return false;
    }
  }
  private async exists(key: string): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.client.statObject(this.config.bucket, key, (err) => {
        if (err) resolve(false);
        resolve(true);
      });
    });
  }
  async download({
    extension,
    identifier,
    type,
  }: {
    identifier: string;
    extension: string;
    type: FileType;
  }): Promise<Buffer | undefined> {
    const key = `${type}/${identifier}.${extension}`;
    return new Promise(async (resolve) => {
      const bufs: Uint8Array[] = [];

      if (!(await this.exists(key))) {
        resolve(undefined);
      }

      this.client.getObject(this.config.bucket, key, (err, dataStream) => {
        if (err) {
          resolve(undefined);
          return;
        }

        if (!dataStream) {
          resolve(undefined);
          return;
        }

        dataStream.on('data', function (chunk) {
          bufs.push(chunk);
        });
        dataStream.on('end', function () {
          const buf = Buffer.concat(bufs);
          resolve(buf);
        });
        dataStream.on('error', function () {
          resolve(undefined);
        });
      });
    });
  }
}
