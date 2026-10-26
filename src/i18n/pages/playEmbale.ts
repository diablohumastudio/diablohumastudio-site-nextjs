const en = {
  title: 'Embale – Web test',
  fullscreen: 'Fullscreen',
  missingBuild: 'The web build is not here yet. Export it from Godot to public/games/embale/index.html.',
} as const;

const es: Record<keyof typeof en, string> = {
  title: 'Embale – Prueba web',
  fullscreen: 'Pantalla completa',
  missingBuild: 'La versión web todavía no está aquí. Expórtala desde Godot a public/games/embale/index.html.',
};

export const playEmbaleDict = { en, es };
