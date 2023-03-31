import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InteractionsModule } from './interactions/interactions.module';
import { GitlabApiServiceModule } from './gitlab-api-service/gitlab-api-service.module';
import { GitlabApiService } from './gitlab-api-service/gitlab-api-service.service';
import { MessageHandlerService } from './message-handler/message-handler.service';
import { DiscordApiService } from './discord-api/discord-api.service';

@Module({
  imports: [InteractionsModule, GitlabApiServiceModule],
  controllers: [AppController],
  providers: [AppService, GitlabApiService, MessageHandlerService, DiscordApiService],
})
export class AppModule {}
