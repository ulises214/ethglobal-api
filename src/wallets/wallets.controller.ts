import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateWalletByFingerprint } from './dto/CreateWalletByFingerprint.dto';
import { WalletService } from './wallets.service';
@Controller('wallets')
export class WalletsController {
  constructor(private readonly walletsService: WalletService) {}
  @Post('fingerprint/create')
  @UseInterceptors(FileInterceptor('file'))
  async createByFingerprint(
    @Body() data: CreateWalletByFingerprint,
    @UploadedFile() file?: Express.Multer.File,
  ): Promise<string> {
    if (!file) throw new BadRequestException('No file uploaded');
    const fileBytes = await file.buffer;
    return this.walletsService.create(fileBytes, data.password);
  }
  @Post('fingerprint/get')
  @UseInterceptors(FileInterceptor('file'))
  async getByFingerprint(
    @Body() data: CreateWalletByFingerprint,
    @UploadedFile() file?: Express.Multer.File,
  ): Promise<string> {
    if (!file) throw new BadRequestException('No file uploaded');
    const fileBytes = await file.buffer;
    return this.walletsService.create(fileBytes, data.password);
  }
}
