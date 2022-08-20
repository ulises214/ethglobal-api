import { Module } from '@nestjs/common';
import { WalletsController } from './wallets.controller';
import { WalletService } from './wallets.service';

@Module({
  providers: [WalletService],
  controllers: [WalletsController],
})
export class WalletsModule {}
