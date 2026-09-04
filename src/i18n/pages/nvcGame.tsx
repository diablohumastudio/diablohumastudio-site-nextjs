import type { ReactNode } from 'react';

/* The modal steps carry markup (strong/code), so this dictionary is typed
   explicitly instead of deriving `es` from the keys of `en`. */
type NvcGameTexts = {
  title: string;
  description: string;
  logoAlt: string;
  tagline: string;
  symbolAlt: string;
  getTheGame: string;
  pcGroup: string;
  mobileGroup: string;
  comingSoon: string;
  windowsDirectAlt: string;
  itchDemoAlt: string;
  steamWishlistAlt: string;
  steamDownloadAlt: string;
  androidDirectAlt: string;
  googlePlayBetaAlt: string;
  appStoreBetaAlt: string;
  modalTitle: string;
  modalCancel: string;
  continueToDownload: string;
  continueToItch: string;
  windowsSteps: ReactNode[];
  itchSteps: (itchPassword: string) => ReactNode[];
  androidSteps: ReactNode[];
  screenshots: string;
  screenshotAlt: (number: number) => string;
  trailer: string;
};

const en: NvcGameTexts = {
  title: 'NvC Game – Diablo Huma Studios',
  description: 'NvC - An exciting game by Diablo Huma Studios. Available on Steam, App Store, and Google Play.',
  logoAlt: 'Nazis vs Communists',
  tagline: 'Learn WWII history by getting addicted to this incredible TD',
  symbolAlt: 'NvC Symbol',
  getTheGame: 'GET THE GAME',
  pcGroup: 'PC',
  mobileGroup: 'MOBILE',
  comingSoon: 'COMING SOON',
  windowsDirectAlt: 'Windows Direct Download',
  itchDemoAlt: 'Demo Download on itch.io',
  steamWishlistAlt: 'Wishlist on Steam',
  steamDownloadAlt: 'Download on Steam',
  androidDirectAlt: 'Android Direct Download',
  googlePlayBetaAlt: 'Become a Beta Tester on Google Play',
  appStoreBetaAlt: 'Become a Beta Tester on the App Store',
  modalTitle: 'Before you download',
  modalCancel: 'Cancel',
  continueToDownload: 'Continue to Download',
  continueToItch: 'Continue to itch.io',
  windowsSteps: [
    <>
      You will be redirected to <strong>Google Drive</strong> to download the demo.
    </>,
    <>
      After downloading, <strong>unzip the file</strong> and make sure both the <code>.exe</code> and <code>.dll</code> files are in the <strong>same folder</strong> before running the game.
    </>,
    <>
      The file is <strong>100% safe</strong> — no viruses, no malware. When you double-click the <code>.exe</code>, Windows Defender SmartScreen may show a warning. Click <strong>&ldquo;More information&rdquo;</strong> and then <strong>&ldquo;Run anyway&rdquo;</strong> to launch the game.
    </>,
  ],
  itchSteps: (itchPassword) => [
    <>
      You will be redirected to <strong>itch.io</strong> to download the demo.
    </>,
    <>
      The itch.io page is <strong>password-protected</strong>. Use the password: <code>{itchPassword}</code>
    </>,
    <>
      After downloading, <strong>unzip the file</strong> and make sure both the <code>.exe</code> and <code>.dll</code> files are in the <strong>same folder</strong> before running the game.
    </>,
    <>
      The file is <strong>100% safe</strong> — no viruses, no malware. When you double-click the <code>.exe</code>, Windows Defender SmartScreen may show a warning. Click <strong>&ldquo;More information&rdquo;</strong> and then <strong>&ldquo;Run anyway&rdquo;</strong> to launch the game.
    </>,
  ],
  androidSteps: [
    <>
      You are about to download the <strong>.apk</strong> installer directly, outside the Google Play Store.
    </>,
    <>
      Android blocks these installs by default. When prompted, allow <strong>&ldquo;Install unknown apps&rdquo;</strong> for the browser or file manager you downloaded with.
    </>,
    <>
      The file is <strong>100% safe</strong> — no viruses, no malware. Google Play Protect may still warn about apps not distributed through the Play Store. Tap <strong>&ldquo;Install anyway&rdquo;</strong> to continue.
    </>,
  ],
  screenshots: 'SCREENSHOTS',
  screenshotAlt: (number) => `NvC Game Screenshot ${number}`,
  trailer: 'TRAILER',
};

const es: NvcGameTexts = {
  title: 'Juego NvC – Diablo Huma Studios',
  description: 'NvC: un juego emocionante de Diablo Huma Studios. Disponible en Steam, App Store y Google Play.',
  logoAlt: 'Nazis vs Comunistas',
  tagline: 'Aprende la historia de la Segunda Guerra Mundial enganchándote a este increíble tower defense',
  symbolAlt: 'Símbolo de NvC',
  getTheGame: 'CONSIGUE EL JUEGO',
  pcGroup: 'PC',
  mobileGroup: 'MÓVIL',
  comingSoon: 'PRÓXIMAMENTE',
  windowsDirectAlt: 'Descarga directa para Windows',
  itchDemoAlt: 'Descargar la demo en itch.io',
  steamWishlistAlt: 'Añadir a la lista de deseos en Steam',
  steamDownloadAlt: 'Descargar en Steam',
  androidDirectAlt: 'Descarga directa para Android',
  googlePlayBetaAlt: 'Sé beta tester en Google Play',
  appStoreBetaAlt: 'Sé beta tester en la App Store',
  modalTitle: 'Antes de descargar',
  modalCancel: 'Cancelar',
  continueToDownload: 'Continuar a la descarga',
  continueToItch: 'Continuar a itch.io',
  windowsSteps: [
    <>
      Te vamos a redirigir a <strong>Google Drive</strong> para descargar la demo.
    </>,
    <>
      Después de descargar, <strong>descomprime el archivo</strong> y asegúrate de que el <code>.exe</code> y el <code>.dll</code> queden en la <strong>misma carpeta</strong> antes de abrir el juego.
    </>,
    <>
      El archivo es <strong>100% seguro</strong>: sin virus ni malware. Al hacer doble clic en el <code>.exe</code>, Windows Defender SmartScreen puede mostrar una advertencia. Haz clic en <strong>«Más información»</strong> y luego en <strong>«Ejecutar de todas formas»</strong> para abrir el juego.
    </>,
  ],
  itchSteps: (itchPassword) => [
    <>
      Te vamos a redirigir a <strong>itch.io</strong> para descargar la demo.
    </>,
    <>
      La página de itch.io está <strong>protegida con contraseña</strong>. Usa la contraseña: <code>{itchPassword}</code>
    </>,
    <>
      Después de descargar, <strong>descomprime el archivo</strong> y asegúrate de que el <code>.exe</code> y el <code>.dll</code> queden en la <strong>misma carpeta</strong> antes de abrir el juego.
    </>,
    <>
      El archivo es <strong>100% seguro</strong>: sin virus ni malware. Al hacer doble clic en el <code>.exe</code>, Windows Defender SmartScreen puede mostrar una advertencia. Haz clic en <strong>«Más información»</strong> y luego en <strong>«Ejecutar de todas formas»</strong> para abrir el juego.
    </>,
  ],
  androidSteps: [
    <>
      Vas a descargar el instalador <strong>.apk</strong> directamente, fuera de Google Play.
    </>,
    <>
      Android bloquea estas instalaciones por defecto. Cuando te lo pida, permite <strong>«Instalar aplicaciones desconocidas»</strong> al navegador o al explorador de archivos con el que descargaste.
    </>,
    <>
      El archivo es <strong>100% seguro</strong>: sin virus ni malware. Google Play Protect puede advertir igual sobre apps que no vienen de la Play Store. Toca <strong>«Instalar de todas formas»</strong> para continuar.
    </>,
  ],
  screenshots: 'CAPTURAS',
  screenshotAlt: (number) => `Captura ${number} del juego NvC`,
  trailer: 'TRÁILER',
};

export const nvcGameDict = { en, es };
