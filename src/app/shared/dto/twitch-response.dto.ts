import { GameDto } from "./game.dto"

export interface TwitchResponseDto {
  data: GameDto[],

  pagination: {
    cursor: string
  }
}
