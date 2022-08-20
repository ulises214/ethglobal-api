import { Module } from '@nestjs/common';
import { ZoomConfigModule } from './config/zoom-config.module';
import { ZoomUseCasesModule } from './zoom-usecases.module';
import { ZoomController } from './zoom.controller';
import { ZoomService } from './zoom.service';

@Module({
  providers: [ZoomService],
  controllers: [ZoomController],
  imports: [ZoomConfigModule, ZoomUseCasesModule],
})
export class ZoomModule {}
