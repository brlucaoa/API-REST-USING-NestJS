import { Test, TestingModule } from '@nestjs/testing';
import { MissaoController } from './missao.controller';
import { MissaoService } from './missao.service';

describe('MissaoController', () => {
  let controller: MissaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MissaoController],
      providers: [MissaoService],
    }).compile();

    controller = module.get<MissaoController>(MissaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
