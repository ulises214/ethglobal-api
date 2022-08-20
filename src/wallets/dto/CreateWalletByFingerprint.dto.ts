import { IsNotEmpty, IsString } from 'class-validator';

export class CreateWalletByFingerprint {
  @IsString()
  @IsNotEmpty()
  password!: string;
}
