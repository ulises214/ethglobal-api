import { Module } from '@nestjs/common';
import { NebuiaConfigModule } from './config/nebuia-config.module';
import { NebuiaRepository } from './infrastructure/nebuia-repository';
import { NebuiaUseCasesModule } from './nebuia-usecases.module';
import { NebuiaController } from './nebuia.controller';
import { NebuiaService } from './nebuia.service';

@Module({
  providers: [NebuiaService, NebuiaRepository],
  controllers: [NebuiaController],
  imports: [NebuiaUseCasesModule, NebuiaConfigModule],
})
export class NebuiaModule {}
