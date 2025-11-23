import { Body, Controller, Get, Delete, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { MissaoService } from './missao.service';
import { CreateMissaoDto } from './dto/create-missao.dto';
import { PostMissaoDto } from './dto/create-missao.dto';
import { UpdateMissaoDto } from './dto/update-missao.dto';

@ApiTags('Missões')
@Controller('missao')
export class MissaoController {
  constructor(private readonly missaoService: MissaoService) {
  }

  @Post()
  @ApiOperation({ summary: 'Criar missão' })
  @ApiResponse({ status: 201, description: 'Missão criada com sucesso' })
  @ApiResponse({ status: 409, description: 'Missão já existe' })
  create(@Body() dto: PostMissaoDto) {
    return this.missaoService.create(dto);
  }

  @Post(':id/operador/:operadorId')
  @ApiOperation({ summary: 'Adicionar operador a uma missão' })
  @ApiResponse({ status: 200, description: 'Operador adicionado com sucesso' })
  @ApiResponse({ status: 404, description: 'Missão ou operador não encontrado' })
  addOperador(
    @Param('id', ParseIntPipe) id: number,
    @Param('operadorId', ParseIntPipe) operadorId: number,
  ) {
    return this.missaoService.addOperador(id, operadorId);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as missões' })
  findAll() {
    return this.missaoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar missão por ID' })
  @ApiResponse({ status: 200, description: 'Missão encontrada com sucesso' })
  @ApiResponse({ status: 404, description: 'Missão não encontrada' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.missaoService.findOne(id);
  }


  @Put(':id')
  @ApiOperation({ summary: 'Atualizar missão e operadores' })
  @ApiResponse({ status: 200, description: 'Missão atualizada com sucesso' })
  @ApiResponse({ status: 404, description: 'Missão não encontrada ou operadores são inválidos' })
  @ApiResponse({ status: 409, description: 'Missão já existe com o mesmo título.' })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateMissaoDto,
  ) {
    return this.missaoService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar missão' })
  @ApiResponse({ status: 200, description: 'Missão deletada com sucesso' })
  @ApiResponse({ status: 404, description: 'Missão não encontrada' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.missaoService.remove(id);
  }
}
