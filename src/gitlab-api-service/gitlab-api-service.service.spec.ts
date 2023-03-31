import { Test, TestingModule } from '@nestjs/testing';
import { GitlabApiService } from './gitlab-api-service.service';

describe('GitlabApiServiceService', () => {
  let service: GitlabApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GitlabApiService],
    }).compile();

    service = module.get<GitlabApiService>(GitlabApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
