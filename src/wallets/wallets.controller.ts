import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { getHashFromFile } from '../utils/GetHashForFile';
import { CreateWalletByFingerprint } from './dto/CreateWalletByFingerprint.dto';
import { CreateWalletResponse } from './responses/create-wallet';
import { WalletService } from './wallets.service';
@Controller('wallets')
export class WalletsController {
  constructor(private readonly walletsService: WalletService) {}
  @Post('fingerprint/create')
  @UseInterceptors(FileInterceptor('file'))
  async createByFingerprint(
    @Body() data: CreateWalletByFingerprint,
    @UploadedFile() file?: Express.Multer.File,
  ): Promise<CreateWalletResponse> {
    if (!file) throw new BadRequestException('No file uploaded');
    const fileBytes = file.buffer;

    const buffer = getHashFromFile(fileBytes);

    return this.walletsService.create(buffer, data.password);
  }
  @Post('fingerprint/get')
  @UseInterceptors(FileInterceptor('file'))
  async getByFingerprint(
    @Body() data: CreateWalletByFingerprint,
    @UploadedFile() file?: Express.Multer.File,
  ): Promise<string> {
    if (!file) throw new BadRequestException('No file uploaded');
    const fileBytes = file.buffer;
    const buffer = getHashFromFile(fileBytes);
    return (await this.walletsService.get(buffer)).address;
  }
}
