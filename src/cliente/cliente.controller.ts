import { Controller, Get, Param, Put } from "@nestjs/common";
import { ClienteService } from "./cliente.service";

@Controller('cliente')
export class ClienteController {
  constructor(private clienteService: ClienteService) {}
  @Get('findCliente/:id')
  findByCep(@Param('id') id) {
    return this.clienteService.findOne(id);
  }

  @Put('addCliente/:params')
  addCliente(@Param('params') params) {
    return this.clienteService.addCliente(params);
  }

}
