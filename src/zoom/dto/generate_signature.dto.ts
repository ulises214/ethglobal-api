import { IsNumber, IsNumberString } from 'class-validator';

export class GenerateSignatureDTO {
  @IsNumberString()
  readonly meetingNumber!: string | number;
  @IsNumber()
  readonly role!: number;
}
