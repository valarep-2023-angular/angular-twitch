import { Stream } from "./stream";

export interface StreamData{
    data:Stream[]
    pagination:{
        cursor:string
    }
}