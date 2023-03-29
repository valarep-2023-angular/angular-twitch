import { GameDto } from "./game.dto";

export interface GameDataDto {
    data: GameDto[]
    pagination: {
        cursor: string
    }
}
