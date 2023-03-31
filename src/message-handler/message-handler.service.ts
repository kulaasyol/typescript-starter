import { Injectable } from '@nestjs/common';

export type TInteractionResponse = {
    interactionKey: string
}

@Injectable()
export class MessageHandlerService {
  handleInteractionResponse(interactionResponse: any): any {
    throw new Error('Method not implemented.');
  }
  prepareInteractionRequest(interactionId: string, interactionBody: unknown): TInteractionResponse {
    throw new Error('Method not implemented.');
  }
}
