import { Controller, Get, Post, Put, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiConflictResponse, ApiCreatedResponse, ApiNotFoundResponse,} from '@nestjs/swagger';
import { OperadorService } from './operador.service';
import { CreateOperadorDto } from './dto/create-operador.dto';
import { ParseIntPipe } from '@nestjs/common';
import { UpdateOperadorDto } from './dto/update-operador.dto';

@ApiTags('Operador')
@Controller('operador')
export class OperadorController {
  constructor(private readonly operadorService: OperadorService) {
  }

  @Post()
  @ApiOperation({ summary: 'Criar operador' })
  @ApiResponse({ status: 201, description: 'Operador criado com sucesso' })
  @ApiResponse({ status: 409, description: 'Email ou CPF já existem' })
  create(@Body() dto: CreateOperadorDto) {
    return this.operadorService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os operadores' })
  @ApiResponse({ status: 201, description: 'Lista de operadores' })
  findAll() {
    return this.operadorService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca operador por ID' })
  @ApiResponse({ status: 200, description: 'Operador encontrado' })
  @ApiResponse({ status: 404, description: 'Operador não encontrado' })
  findOne(@Param('id') id: string) {
    return this.operadorService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar operador' })
  @ApiResponse({ status: 200, description: 'Operador atualizado com sucesso' })
  @ApiResponse({ status: 404, description: 'Operador não encontrado' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateOperadorDto) {
    return this.operadorService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar operador' })
  @ApiResponse({ status: 200, description: 'Operador deletado com sucesso' })
  @ApiResponse({ status: 404, description: 'Operador não encontrado' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.operadorService.remove(id);
  }
}

