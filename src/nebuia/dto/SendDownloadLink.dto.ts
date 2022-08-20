import { IsString } from 'class-validator';

export class SendDownloadLinkDto {
  @IsString()
  readonly report!: string;
}
