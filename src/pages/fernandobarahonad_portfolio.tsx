import Head from 'next/head';
import Image from 'next/image';

// Unlisted page: reachable only at /fernandobarahonad_portfolio, never linked
// from the header, footer or any other page.
export default function FernandoBarahonaPortfolio() {
  return (
    <>
      <Head>
        <title>Fernando Barahona – Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <section className="contact-hero-section">
        {/* PLACEHOLDER — replace with your name and one-line pitch */}
        <h1>Fernando Barahona</h1>
        <p>Game developer and video producer at Diablo Huma Studio.</p>
      </section>

      {/* About */}
      <section className="portfolio-section">
        <h2 className="category-title">ABOUT</h2>
        <div className="portfolio-bio">
          {/* PLACEHOLDER — replace with your real bio */}
          <p>
            Short bio goes here: who you are, what you build, and what you are looking for.
            Two or three sentences is usually enough for a portfolio landing.
          </p>
        </div>
        {/* PLACEHOLDER — replace with your real skills */}
        <ul className="portfolio-skills">
          <li>Godot / GDScript</li>
          <li>Game design</li>
          <li>Next.js / React</li>
          <li>Video production</li>
          <li>Motion graphics</li>
        </ul>
      </section>

      {/* Games */}
      <section className="portfolio-section">
        <h2 className="category-title">GAMES</h2>
        <div className="video-showcase-grid video-showcase-grid-small">
          <div className="video-showcase-item">
            <div className="portfolio-game-logo">
              <Image
                src="/assets/NvC/nvc_logo.png"
                alt="Nazis vs Communists"
                width={600}
                height={200}
              />
            </div>
            <h3>Nazis vs Communists</h3>
            <p>
              A tower defense game that teaches WWII history. Built in Godot, currently in demo
              with a Steam release in preparation.
            </p>
          </div>
        </div>
      </section>

      {/* Video production */}
      <section className="portfolio-section">
        <h2 className="category-title">VIDEO PRODUCTION</h2>
        <div className="video-showcase-grid video-showcase-grid-small">
          <div className="video-showcase-item">
            <div className="video-container">
              <video controls className="showcase-video">
                <source src="/assets/video_production/videos/CentralReguladoraCaudal.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <h3>Central Reguladora de Caudal</h3>
            <p>Technical explainer produced for an engineering client.</p>
          </div>
          <div className="video-showcase-item">
            <div className="video-container">
              <video controls className="showcase-video">
                <source src="/assets/video_production/videos/games/NvC_Intro_sp-sub.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <h3>NvC Intro</h3>
            <p>Cinematic intro sequence for Nazis vs Communists.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="portfolio-section">
        <h2 className="category-title">CONTACT</h2>
        <div className="portfolio-contact">
          {/* PLACEHOLDER — replace with the address and links you want public */}
          <p>
            <a href="mailto:fernandobarahonad@diablohumastudio.com">
              fernandobarahonad@diablohumastudio.com
            </a>
          </p>
          <p>Add your LinkedIn, GitHub, itch.io or CV download links here.</p>
        </div>
      </section>
    </>
  );
}
