import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateNebuiaReportFromCreditDTO {
  @IsString()
  @IsNotEmpty()
  clientNumber!: string;

  @IsNumber()
  @IsNotEmpty()
  creditNumber!: number;
}
