import { Controller, Get, Param, Put } from "@nestjs/common";
import { CidadeService } from "./cidade.service";

@Controller('cidade')
export class CidadeController {
  constructor(private cidadeService: CidadeService) {}
  @Get('findCidade/:idCidade')
  findById(@Param('idCidade') idCidade) {
    return this.cidadeService.findOne(idCidade);
  }

  @Put('addCidade/:params')
  addCidade(@Param('params') params) {
    return this.cidadeService.addCidade(params);
  }
}
