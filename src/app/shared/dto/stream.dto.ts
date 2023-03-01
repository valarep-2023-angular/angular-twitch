export interface StreamDto {
  id: number,
  user_id: number,
  user_login: string,
  user_name: string,
  game_id: number,
  game_name: string,
  type: string,
  title: string,
  tags: string[],
  viewer_count: string,
  started_at: Date,
  language: string,
  thumbnail_url: string,
  tag_ids: string[],
  is_mature: boolean
}
