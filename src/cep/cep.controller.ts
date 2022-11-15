import { Controller, Get, Param } from '@nestjs/common';
import { CepService } from './cep.service';

@Controller('cep')
export class CepController {
  constructor(private cepService: CepService) {}
  @Get('findByCep/:cep')
  findByCep(@Param('cep') cep) {
    return this.cepService.findByCep(cep);
  }
}
