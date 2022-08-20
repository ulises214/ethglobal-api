import { Injectable } from '@nestjs/common';
import { File, Web3Storage } from 'web3.storage';
import { Web3StorageConfigService } from './config/web3-storage-config.service';
@Injectable()
export class Web3StorageService {
  private readonly storage: Web3Storage;
  constructor(private readonly config: Web3StorageConfigService) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.storage = new Web3Storage({
      token: config.token,
    });
  }
  async upload(buff: Buffer, type: 'text/html'): Promise<string> {
    const file = new File([buff], `file.${type.split('/')[1]}`, {
      type,
    });
    const cid = await this.storage.put([file]);
    return cid;
  }
}
