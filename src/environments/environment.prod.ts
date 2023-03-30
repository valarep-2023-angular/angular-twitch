const apiConfig = {
  clientId: 'efrmnqokv2zxydq5aqco0p3i0tqpg4',
  authUrl: 'https://id.twitch.tv/oauth2/authorize',
  redirectUrl: 'https://6425b20d488cc200085b4a7a--kaleidoscopic-hotteok-8bac2d.netlify.app/auth/authorize',
  baseUrl: 'https://api.twitch.tv/helix',
};

const oAuthConfig = {
  authLink: `${apiConfig.authUrl}?client_id=${apiConfig.clientId}&response_type=token&redirect_uri=${apiConfig.redirectUrl}`
};

export const environment = {
  production: true,
  api: {...apiConfig, ...oAuthConfig},
  twitch: {
    streamPlayerUrl: 'https://player.twitch.tv/?parent=6425b20d488cc200085b4a7a--kaleidoscopic-hotteok-8bac2d.netlify.app&channel=',
    clipPlayerUrl: 'https://clips.twitch.tv/embed?parent=6425b20d488cc200085b4a7a--kaleidoscopic-hotteok-8bac2d.netlify.app&clip=',
    videoPlayerUrl: 'https://videos.twitch.tv/embed?parent=6425b20d488cc200085b4a7a--kaleidoscopic-hotteok-8bac2d.netlify.app&video=',
    chatUrl: 'https://www.twitch.tv/embed/[USERNAME]/chat?parent=6425b20d488cc200085b4a7a--kaleidoscopic-hotteok-8bac2d.netlify.app',
  }
};
