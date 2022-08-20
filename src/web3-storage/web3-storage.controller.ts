import {
  Controller,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DevEndpointGuard } from 'src/common/guards/dev-route.guard';
import { Web3StorageService } from './web3-storage.service';

@Controller('we3storage')
export class Web3StorageController {
  constructor(private readonly web3StorageService: Web3StorageService) {}

  @Post('test')
  @UseGuards(DevEndpointGuard)
  @UseInterceptors(FileInterceptor('file'))
  async uploadTest(
    @UploadedFile() file?: Express.Multer.File,
  ): Promise<string> {
    if (!file) {
      throw new Error('No file');
    }
    return await this.web3StorageService.upload(file.buffer, 'text/html');
  }
}
