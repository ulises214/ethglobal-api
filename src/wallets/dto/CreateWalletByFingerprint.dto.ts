import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateWalletByFingerprint {
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  password!: string;
}
