import { Injectable } from '@nestjs/common';
import { GenerateZoomSignature } from './use_cases/generate_signature';

@Injectable()
export class ZoomUseCasesServices {
  constructor(public readonly generateSignature: GenerateZoomSignature) {}
}
