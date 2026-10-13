import Head from 'next/head';
import hero from '../styles/hero.module.css';
import s from './IccaPitch.module.css';

export default function GameplayLargo() {
  return (
    <>
      <Head>
        <title>Gameplay Largo</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <section className={s.iccaSection}>
        <div className={hero.videoBackground}>
          <video autoPlay loop muted playsInline className={hero.heroVideo}>
            <source src="/assets/NvC/new_grlitched_video.mp4" type="video/mp4" />
          </video>
          <div className={hero.videoOverlay}></div>
        </div>
        <div className={s.iccaVideoWrapper}>
          <video controls className={s.iccaPitchVideo}>
            <source src="/assets/icca/gameplay_largo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </>
  );
}
