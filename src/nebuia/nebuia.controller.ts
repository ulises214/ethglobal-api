import { Controller, Get } from '@nestjs/common';
import { NebuiaService } from './nebuia.service';
import { GetNebuiaKeysResponse } from './responses';

@Controller('nebuia')
export class NebuiaController {
  constructor(private readonly nebuiaService: NebuiaService) {}

  @Get('keys')
  getKeys(): GetNebuiaKeysResponse {
    return this.nebuiaService.getKeys();
  }
}
