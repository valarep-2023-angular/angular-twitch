const apiConfig = {
  clientId: 'routoe8zdnbg56b4jbnhkb7f1cjbng',
  authUrl: 'https://id.twitch.tv/oauth2/authorize',
  redirectUrl: 'https://angular-julian.netlify.app/auth/authorize',
  baseUrl: 'https://api.twitch.tv/helix',
};

const oAuthConfig = {
  authLink: `${apiConfig.authUrl}?client_id=${apiConfig.clientId}&response_type=token&redirect_uri=${apiConfig.redirectUrl}`
};

export const environment = {
  production: true,
  api: {...apiConfig, ...oAuthConfig},
  twitch: {
    streamPlayerUrl: 'https://player.twitch.tv/?parent=angular-julian.netlify.app&channel=',
    clipPlayerUrl: 'https://clips.twitch.tv/embed?parent=angular-julian.netlify.app&clip=',
    videoPlayerUrl: 'https://videos.twitch.tv/embed?parent=angular-julian.netlify.app&video=',
    chatUrl: 'https://www.twitch.tv/embed/[USERNAME]/chat?parent=angular-julian.netlify.app',
  }
};
