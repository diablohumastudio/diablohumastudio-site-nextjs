const en = {
  title: 'Diablo Huma Studio',
  heroAlt: 'Diablo Huma Studio',
  ourGames: 'OUR GAMES',
  nvcLogoAlt: 'Logo of NvC game',
  androidAlt: 'Link to android download NvC game',
  appStoreAlt: 'Link to appstore download NvC game',
  steamAlt: 'Link to steam download NvC game',
} as const;

const es: Record<keyof typeof en, string> = {
  title: 'Diablo Huma Studio',
  heroAlt: 'Diablo Huma Studio',
  ourGames: 'NUESTROS JUEGOS',
  nvcLogoAlt: 'Logo del juego NvC',
  androidAlt: 'Enlace para descargar NvC en Android',
  appStoreAlt: 'Enlace para descargar NvC en la App Store',
  steamAlt: 'Enlace para descargar NvC en Steam',
};

export const homeDict = { en, es };
