import { Test, TestingModule } from '@nestjs/testing';
import { MissaoService } from './missao.service';

describe('MissaoService', () => {
  let service: MissaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MissaoService],
    }).compile();

    service = module.get<MissaoService>(MissaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
