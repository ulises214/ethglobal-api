import { Module } from '@nestjs/common';
import { ZoomConfigModule } from './config/zoom-config.module';
import { GenerateZoomSignature } from './use_cases/generate_signature';
import { ZoomUseCasesServices } from './zoom-usecases.service';

@Module({
  imports: [ZoomConfigModule],
  providers: [GenerateZoomSignature, ZoomUseCasesServices],
  exports: [ZoomUseCasesServices],
})
export class ZoomUseCasesModule {}
