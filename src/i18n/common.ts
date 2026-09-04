const en = {
  navCourses: 'Courses',
  navNvcGame: 'NvC Game',
  navVideos: 'Videos',
  navContact: 'Contact',
  footerSteamAlt: 'Link to Studio Steam account',
  footerYoutubeAlt: 'Link to Studio Youtube account',
  footerXAlt: 'Link to Studio X social account',
  footerInstagramAlt: 'Link to Studio Instagram account',
  footerCopyright: '© 2024 Diablo Huma Studio. All rights reserved.',
  videoUnsupported: 'Your browser does not support the video tag.',
  notFoundTitle: 'Page not found – Diablo Huma Studio',
  notFoundHeading: 'PAGE NOT FOUND',
  notFoundText: 'The page you are looking for does not exist or has moved.',
  notFoundHome: 'Go to the home page',
} as const;

const es: Record<keyof typeof en, string> = {
  navCourses: 'Cursos',
  navNvcGame: 'Juego NvC',
  navVideos: 'Videos',
  navContact: 'Contacto',
  footerSteamAlt: 'Enlace a la cuenta de Steam del estudio',
  footerYoutubeAlt: 'Enlace a la cuenta de YouTube del estudio',
  footerXAlt: 'Enlace a la cuenta de X del estudio',
  footerInstagramAlt: 'Enlace a la cuenta de Instagram del estudio',
  footerCopyright: '© 2024 Diablo Huma Studio. Todos los derechos reservados.',
  videoUnsupported: 'Tu navegador no soporta la etiqueta de video.',
  notFoundTitle: 'Página no encontrada – Diablo Huma Studio',
  notFoundHeading: 'PÁGINA NO ENCONTRADA',
  notFoundText: 'La página que buscas no existe o cambió de lugar.',
  notFoundHome: 'Ir al inicio',
};

export const commonDict = { en, es };
