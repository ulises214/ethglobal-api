import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { join } from 'path';
import {
  FileExtension,
  FileStorageService,
  FileType,
} from '../domain/FileStorage';

@Injectable()
export class SystemFileStorage implements FileStorageService {
  private dir = join(__dirname, 'uploads');
  async upload({
    extension,
    file,
    identifier,
  }: {
    type: FileType;
    file: Buffer;
    identifier: string;
    extension: FileExtension;
  }): Promise<boolean> {
    if (!fs.existsSync(this.dir)) {
      fs.mkdirSync(this.dir);
    }
    fs.writeFileSync(join(this.dir, `${identifier}.${extension}`), file);
    return true;
  }
  async download({
    extension,
    identifier,
  }: {
    identifier: string;
    extension: FileExtension;
  }): Promise<Buffer | undefined> {
    try {
      return fs.readFileSync(join(this.dir, `${identifier}.${extension}`));
    } catch (error) {
      console.log(error);
      return;
    }
  }
}
