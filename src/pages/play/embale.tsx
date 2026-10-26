import fs from 'fs';
import path from 'path';
import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRef } from 'react';
import { playEmbaleDict } from '../../i18n/pages/playEmbale';
import { useT } from '../../i18n/useT';
import s from './Embale.module.css';

// The Godot web export lives in public/games/embale/ (exported as index.html, so the
// extra .pck files sit next to it and are fetched relative to this URL). The game runs
// in an iframe without COOP/COEP headers on purpose: that is how Poki embeds it.
const GAME_URL = '/games/embale/index.html';

// Drop the background image in public/assets/embale/ and point this at it.
// null keeps the gradient. Keep it an image, not a video: a video competing for
// bandwidth would distort the download timings this page exists to measure.
const BACKGROUND_IMAGE_URL: string | null = null;

type PlayEmbaleProps = {
  buildExists: boolean;
};

// Checked at build time (on every request in dev): without the export the iframe would
// load the site's 404 page, header and footer included.
export const getStaticProps: GetStaticProps<PlayEmbaleProps> = async () => {
  const buildExists = fs.existsSync(path.join(process.cwd(), 'public', GAME_URL));
  return { props: { buildExists } };
};

export default function PlayEmbale({ buildExists }: PlayEmbaleProps) {
  const t = useT(playEmbaleDict);
  const gameFrameRef = useRef<HTMLIFrameElement>(null);

  const enterFullscreen = () => {
    gameFrameRef.current?.requestFullscreen();
  };

  return (
    <>
      <Head>
        <title>{t.title}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <section className={s.playSection}>
        {BACKGROUND_IMAGE_URL && (
          <div className={s.background}>
            <Image src={BACKGROUND_IMAGE_URL} alt="" fill priority sizes="100vw" className={s.backgroundImage} />
            <div className={s.backgroundOverlay}></div>
          </div>
        )}
        <div className={s.gameArea}>
          {buildExists ? (
            <>
              <iframe
                ref={gameFrameRef}
                src={GAME_URL}
                title={t.title}
                className={s.gameFrame}
                allow="autoplay; fullscreen; gamepad"
                allowFullScreen
              />
              <div className={s.gameToolbar}>
                <button type="button" className={s.fullscreenButton} onClick={enterFullscreen}>
                  {t.fullscreen}
                </button>
              </div>
            </>
          ) : (
            <p className={s.gamePlaceholder}>{t.missingBuild}</p>
          )}
        </div>
      </section>
    </>
  );
}
