import { Controller, Body, Param,Put } from '@nestjs/common';
import { PublisherService } from './publisher.service';
import { UpdateOperadorPublisherDto } from './dto/update-publisher.dto';
import { UpdateMissaoPublisherDto } from './dto/update-publisher.dto';
import { ApiOperation, ApiResponse,} from '@nestjs/swagger';
import { ParseIntPipe } from '@nestjs/common';

@Controller('Updater')
export class PublisherController {
  constructor(private readonly publisherService: PublisherService) {}

  @Put('operador-update/:id')
  @ApiOperation({ summary: 'Atualizar operador' })
  @ApiResponse({ status: 200, description: 'Operador atualizado com sucesso' })
  async updateOperador(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateOperadorPublisherDto) {
    return this.publisherService.publishEvent('operador.updated', {id,
    ...dto});
  }

  @Put('missao-update/:id')
  @ApiOperation({ summary: 'Publica atualização de missão e operadores' })
  @ApiResponse({ status: 200, description: 'Missão atualizada com sucesso' })
  async updateMissao(
    @Param('id', ParseIntPipe) id: number, @Body() dto: UpdateMissaoPublisherDto,) {
    return this.publisherService.publishEvent('missao.updated', { id,
      ...dto, });
  }
}
