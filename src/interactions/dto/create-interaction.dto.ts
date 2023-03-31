import { ApiProperty } from "@nestjs/swagger"

export class CreateInteractionDto {
    @ApiProperty()
    keyword: string
    @ApiProperty()
    resource: string
}