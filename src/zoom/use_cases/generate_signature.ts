import { Injectable } from '@nestjs/common';
import { KJUR } from 'jsrsasign';
import { ZoomConfigService } from '../config/zoom-config.service';
import { GenerateSignatureDTO } from '../dto/generate_signature.dto';
export type GenerateZoomSignatureResponse = {
  signature: string;
};
@Injectable()
export class GenerateZoomSignature {
  constructor(private readonly config: ZoomConfigService) {}
  execute(data: GenerateSignatureDTO): GenerateZoomSignatureResponse {
    const iat = Math.round(new Date().getTime() / 1000) - 30;
    const exp = iat + 60 * 60 * 2;
    const tokenExp = iat + 60 * 60 * 2;
    const oHeader = { alg: 'HS256', typ: 'JWT' };
    const oPayload = {
      sdkKey: this.config.key,
      appKey: this.config.key,
      mn: data.meetingNumber,
      role: data.role,
      iat,
      exp,
      tokenExp,
    };
    const sHeader = JSON.stringify(oHeader);
    const sPayload = JSON.stringify(oPayload);
    const signature = KJUR.jws.JWS.sign(
      'HS256',
      sHeader,
      sPayload,
      this.config.secret,
    );
    return {
      signature,
    };
  }
}
