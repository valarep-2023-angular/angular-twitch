const apiConfig = {
  clientId: 'rfd2f07rr1h6calalumskv09i8bbz7',
  authUrl: 'https://id.twitch.tv/oauth2/authorize',
  redirectUrl: 'https://angular-pierre.netlify.app/auth/authorize',
  baseUrl: 'https://api.twitch.tv/helix',
};

const oAuthConfig = {
  authLink: `${apiConfig.authUrl}?client_id=${apiConfig.clientId}&response_type=token&redirect_uri=${apiConfig.redirectUrl}`
};

export const environment = {
  production: true,
  api: {...apiConfig, ...oAuthConfig},
  twitch: {
    streamPlayerUrl: 'https://player.twitch.tv/?parent=angular-pierre.netlify.app&channel=',
    clipPlayerUrl: 'https://clips.twitch.tv/embed?parent=angular-pierre.netlify.app&clip=',
    videoPlayerUrl: 'https://videos.twitch.tv/embed?parent=angular-pierre.netlify.app&video=',
    chatUrl: 'https://www.twitch.tv/embed/[USERNAME]/chat?parent=angular-pierre.netlify.app',
  }
};
