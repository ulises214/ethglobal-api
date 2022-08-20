import { Module } from '@nestjs/common';
import { AppConfigModule } from 'src/app/config/app-config.module';
import { Web3StorageConfigModule } from './config/web3-storage-config.module';
import { Web3StorageController } from './web3-storage.controller';
import { Web3StorageService } from './web3-storage.service';

@Module({
  providers: [Web3StorageService],
  imports: [Web3StorageConfigModule, AppConfigModule],
  exports: [Web3StorageService],
  controllers: [Web3StorageController],
})
export class Web3StorageModule {}
