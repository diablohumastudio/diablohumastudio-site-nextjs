import Head from 'next/head';
import Image from 'next/image';
import { homeDict } from '../i18n/pages/home';
import { useT } from '../i18n/useT';
import hero from '../styles/hero.module.css';
import s from './Home.module.css';

export default function Home() {
  const t = useT(homeDict);

  return (
    <>
      <Head>
        <title>{t.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Hero Section */}
      <section className={hero.heroSection}>
        <Image
          className={hero.heroImage}
          src="/assets/home/hero-image.png"
          alt={t.heroAlt}
          width={1920}
          height={1080}
          priority
        />
      </section>

      {/* Games Section */}
      <main className={s.mainContent}>
        <section className={s.gamesSection}>
          <h2>{t.ourGames}</h2>
          <div>
            <div className={s.gameLogo}>
              <Image
                src="/assets/home/nvc_square.png"
                alt={t.nvcLogoAlt}
                width={900}
                height={900}
                loading="lazy"
              />
            </div>
            <div className={s.gamePlatformIcons}>
              <a href="#" className={s.platformIcon}>
                <Image
                  src="/assets/home/orange_android.png"
                  alt={t.androidAlt}
                  width={60}
                  height={60}
                  loading="lazy"
                />
              </a>
              <a href="#" className={s.platformIcon}>
                <Image
                  src="/assets/home/orange_appstore.png"
                  alt={t.appStoreAlt}
                  width={60}
                  height={60}
                  loading="lazy"
                />
              </a>
              <a href="#" className={s.platformIcon}>
                <Image
                  src="/assets/home/orange_steam.png"
                  alt={t.steamAlt}
                  width={60}
                  height={60}
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
