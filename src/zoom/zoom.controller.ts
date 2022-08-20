import { Body, Controller, Post } from '@nestjs/common';
import { GenerateSignatureDTO } from './dto/generate_signature.dto';
import { ZoomService } from './zoom.service';

@Controller('zoom')
export class ZoomController {
  constructor(private readonly zoomService: ZoomService) {}
  @Post('generateSignature')
  generateSignature(@Body() body: GenerateSignatureDTO): { signature: string } {
    return this.zoomService.generateSignature(body);
  }
}
