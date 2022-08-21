import { Module } from '@nestjs/common';
import { Web3StorageModule } from 'src/web3-storage/web3-storage.module';
import { WalletsController } from './wallets.controller';
import { WalletService } from './wallets.service';

@Module({
  providers: [WalletService],
  controllers: [WalletsController],
  imports: [Web3StorageModule],
})
export class WalletsModule {}
