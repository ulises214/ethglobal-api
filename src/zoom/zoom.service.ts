import { Injectable } from '@nestjs/common';
import { GenerateSignatureDTO } from './dto/generate_signature.dto';
import { GenerateZoomSignatureResponse } from './use_cases/generate_signature';
import { ZoomUseCasesServices } from './zoom-usecases.service';

@Injectable()
export class ZoomService {
  constructor(private readonly useCasesService: ZoomUseCasesServices) {}
  generateSignature(data: GenerateSignatureDTO): GenerateZoomSignatureResponse {
    return this.useCasesService.generateSignature.execute(data);
  }
}
