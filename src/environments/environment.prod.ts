const apiConfig = {
  clientId: 'efrmnqokv2zxydq5aqco0p3i0tqpg4',
  authUrl: 'https://id.twitch.tv/oauth2/authorize',
  redirectUrl: 'http://localhost:4200/auth/authorize',
  baseUrl: 'https://api.twitch.tv/helix',
};

const oAuthConfig = {
  authLink: `${apiConfig.authUrl}?client_id=${apiConfig.clientId}&response_type=token&redirect_uri=${apiConfig.redirectUrl}`
};

export const environment = {
  production: true,
  api: {...apiConfig, ...oAuthConfig},
  twitch: {
    videoPlayerUrl: 'http://player.twitch.tv/?parent=localhost&channel=',
    videoClipUrl: 'https://clips.twitch.tv/embed?parent=localhost&clip=',
    videoVideoUrl: 'https://videos.twitch.tv/embed?parent=localhost&video=',
    chatRoomUrl: 'https://www.twitch.tv/embed/[USERNAME]/chat',
  }
};
