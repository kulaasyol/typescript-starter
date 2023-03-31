import { Module } from '@nestjs/common';
import { GitlabApiService } from './gitlab-api-service.service';

@Module({
  providers: [GitlabApiService]
})
export class GitlabApiServiceModule {}
