export interface TwitchResponseDto<T> {
  data: T[];
  pagination: { cursor: string };
}
