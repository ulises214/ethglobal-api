import { Module } from '@nestjs/common';
import { NestMinioModule } from 'nestjs-minio';
import { FileStorageServiceToken } from './domain/FileStorage';
import { S3ConfigModule } from './s3/config/s3-config.module';
import { S3ConfigService } from './s3/config/s3-config.service';
import { S3FileStorageService } from './s3/file-storage-s3.service';
@Module({
  imports: [
    S3ConfigModule,
    NestMinioModule.registerAsync({
      imports: [S3ConfigModule],
      inject: [S3ConfigService],
      useFactory: async (s3Config: S3ConfigService) => ({
        endPoint: s3Config.url,
        port: s3Config.port,
        useSSL: false,
        accessKey: s3Config.accessKeyId,
        secretKey: s3Config.secretAccessKey,
      }),
    }),
  ],
  providers: [
    {
      provide: FileStorageServiceToken,
      useClass: S3FileStorageService,
    },
  ],
  exports: [FileStorageServiceToken],
})
export class FileStorageModule {}
