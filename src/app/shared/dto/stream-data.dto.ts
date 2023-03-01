import {StreamDto} from "./stream.dto";

export interface StreamDataDto {
  data: StreamDto[]
  pagination: {
    cursor: string
  }
}
