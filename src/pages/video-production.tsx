import Head from 'next/head';
import { commonDict } from '../i18n/common';
import { videoProductionDict } from '../i18n/pages/videoProduction';
import { useT } from '../i18n/useT';
import hero from '../styles/hero.module.css';
import showcase from '../styles/videoShowcase.module.css';
import s from './VideoProduction.module.css';

export default function VideoProduction() {
  const t = useT(videoProductionDict);
  const common = useT(commonDict);

  return (
    <>
      <Head>
        <title>{t.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index,follow" />
        <meta name="description" content={t.description} />
      </Head>

      {/* Hero Section with Video Background */}
      <section className={s.heroSection}>
        <div className={hero.videoBackground}>
          <video autoPlay loop muted playsInline className={hero.heroVideo}>
            <source src="/assets/video_production/videos/CentralReguladoraCaudal.mp4" type="video/mp4" />
            {common.videoUnsupported}
          </video>
          <div className={hero.videoOverlay}></div>
          <div className={s.videoOverlayBlack}></div>
        </div>
        <div className={s.heroContent}>
          <h1>{t.heroLine1}</h1>
          <h1>{t.heroLine2}</h1>
        </div>
      </section>

      {/* Corporate Training & Education Section */}
      <section className={showcase.videoShowcaseSection}>
        <h2 className={showcase.categoryTitle}>{t.trainingSection}</h2>
        <div className={showcase.videoShowcaseGrid}>
          <div className={showcase.videoShowcaseItem}>
            <div className={showcase.videoContainer}>
              <video controls className={showcase.showcaseVideo} poster="/assets/video_production/videos/corporate_training/IntroductionToScenesAndNodes_v1_thumbnail.jpg">
                <source src="/assets/video_production/videos/corporate_training/IntroductionToScenesAndNodes_v1.mp4" type="video/mp4" />
                {common.videoUnsupported}
              </video>
            </div>
            <h3>{t.godotTitle}</h3>
            <p>{t.godotText}</p>
          </div>

          <div className={showcase.videoShowcaseItem}>
            <div className={showcase.videoContainer}>
              <video controls className={showcase.showcaseVideo} poster="/assets/video_production/videos/corporate_training/ProcesoEncendidoHidroelectricaLaurel_thumbnail.jpg">
                <source src="/assets/video_production/videos/corporate_training/ProcesoEncendidoHidroelectricaLaurel.mp4" type="video/mp4" />
                {common.videoUnsupported}
              </video>
            </div>
            <h3>{t.hydroTitle}</h3>
            <p>{t.hydroText}</p>
          </div>
        </div>
      </section>

      {/* Business Presentations Section */}
      <section className={showcase.videoShowcaseSection}>
        <h2 className={showcase.categoryTitle}>{t.businessSection}</h2>
        <div className={showcase.videoShowcaseGrid}>
          <div className={showcase.videoShowcaseItem}>
            <div className={showcase.videoContainer}>
              <video controls className={showcase.showcaseVideo} poster="/assets/video_production/videos/business_presentations/SectorizacionAguaPotablePuyo_thumbnail.jpg">
                <source src="/assets/video_production/videos/business_presentations/SectorizacionAguaPotablePuyo.mp4" type="video/mp4" />
                {common.videoUnsupported}
              </video>
            </div>
            <h3>{t.puyoTitle}</h3>
            <p>{t.businessText}</p>
          </div>

          <div className={showcase.videoShowcaseItem}>
            <div className={showcase.videoContainer}>
              <video controls className={showcase.showcaseVideo} poster="/assets/video_production/videos/business_presentations/VideoCoandaMera_thumbnail.jpg">
                <source src="/assets/video_production/videos/business_presentations/VideoCoandaMera.mp4" type="video/mp4" />
                {common.videoUnsupported}
              </video>
            </div>
            <h3>{t.coandaTitle}</h3>
            <p>{t.businessText}</p>
          </div>
        </div>
      </section>

      {/* Marketing/Promotional Content Section */}
      <section className={showcase.videoShowcaseSection}>
        <h2 className={showcase.categoryTitle}>{t.marketingSection}</h2>
        <div className={showcase.videoShowcaseGridSmall}>
          <div className={showcase.videoShowcaseItem}>
            <div className={showcase.videoContainer}>
              <video controls className={showcase.showcaseVideo} poster="/assets/video_production/videos/marketing/CPCSS_thumbnail.jpg">
                <source src="/assets/video_production/videos/marketing/CPCSS.mp4" type="video/mp4" />
                {common.videoUnsupported}
              </video>
            </div>
            <h3>{t.cpcssTitle}</h3>
            <p>{t.marketingText}</p>
          </div>

          <div className={showcase.videoShowcaseItem}>
            <div className={showcase.videoContainer}>
              <video controls className={showcase.showcaseVideo} poster="/assets/video_production/videos/marketing/RenovaEnergia_thumbnail.jpg">
                <source src="/assets/video_production/videos/marketing/RenovaEnergia.mp4" type="video/mp4" />
                {common.videoUnsupported}
              </video>
            </div>
            <h3>{t.renovaTitle}</h3>
            <p>{t.marketingText}</p>
          </div>
        </div>
      </section>

      {/* Games Video Content Section */}
      <section className={showcase.videoShowcaseSection}>
        <h2 className={showcase.categoryTitle}>{t.gamesSection}</h2>
        <div className={showcase.videoShowcaseGridSmall}>
          <div className={showcase.videoShowcaseItem}>
            <div className={showcase.videoContainer}>
              <video controls className={showcase.showcaseVideo} poster="/assets/video_production/videos/games/NvC_Intro_sp-sub_thumbnail.jpg">
                <source src="/assets/video_production/videos/games/NvC_Intro_sp-sub.mp4" type="video/mp4" />
                {common.videoUnsupported}
              </video>
            </div>
            <h3>{t.nvcIntroTitle}</h3>
            <p>{t.nvcIntroText}</p>
          </div>
        </div>
      </section>
    </>
  );
}
