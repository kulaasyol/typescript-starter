import { Injectable } from '@nestjs/common';
import { DiscordApiService } from 'src/discord-api/discord-api.service';
import { GitlabApiService } from 'src/gitlab-api-service/gitlab-api-service.service';
import { MessageHandlerService, TInteractionResponse } from 'src/message-handler/message-handler.service';
import { CreateInteractionDto } from './dto/create-interaction.dto';
import { UpdateInteractionDto } from './dto/update-interaction.dto';
import { Interaction } from './entities/interaction.entity';

@Injectable()
export class InteractionsService {
  private interactions: Interaction[] = []

  constructor(
    private discordApiService: DiscordApiService,
    private gitlabApiService: GitlabApiService,
    private messageHandlerService: MessageHandlerService
  ){}

  create(createInteractionDto: CreateInteractionDto) {
    const newInteraction: Interaction = {
      keyword: createInteractionDto.keyword,
      resource: createInteractionDto.resource
    }
    if(this.interactions.find(
        (interaction) => interaction.keyword === newInteraction.keyword
        ) === undefined) {
      this.interactions.push(newInteraction)
      console.log(this.interactions)
    }
    
  }

  findAll() {
    return this.interactions
  }

  findOne(id: number) {
    return `This action returns a #${id} interaction`;
  }

  update(id: number, updateInteractionDto: UpdateInteractionDto) {
    return `This action updates a #${id} interaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} interaction`;
  }

  executeInteraction(interactionId: string, interactionBody: unknown) {
    const interaction: unknown & TInteractionResponse = this.messageHandlerService
      .prepareInteractionRequest(interactionId, interactionBody)
    let interactionResponse;
    let sanitizedResponse;

    switch(interaction.interactionKey) {
      case 'getAllIssues': {
        interactionResponse = this.gitlabApiService.getAllIssues(interaction)
        sanitizedResponse = this.messageHandlerService.handleInteractionResponse(
          interactionResponse
        ) 
        return this.discordApiService.sendResponse("", sanitizedResponse)
      }
    }
    throw new Error('Method not implemented.');
  }
}
