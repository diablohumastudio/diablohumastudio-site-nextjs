import Head from 'next/head';
import Image from 'next/image';

export default function VideoProduction() {
  return (
    <>
      <Head>
        <title>Video Production – Diablo Huma Studios</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index,follow" />
        <meta name="description" content="Professional video production services - fast and economic" />
      </Head>

      {/* Hero Section with Video Background */}
      <section className="hero-section hero-section-video">
        <div className="video-background">
          <video autoPlay loop muted playsInline className="hero-video">
            <source src="/assets/video_production/CentralReguladoraCaudal.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </div>
        <div className="hero-content-video">
          <h1>WE PRODUCE GOOD VIDEOS</h1>
          <h1>FAST AND ECONOMIC</h1>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="video-showcase-section">
        <h2>OUR WORK</h2>
        <div className="video-showcase-grid">
          <div className="video-showcase-item">
            <div className="video-container">
              <video controls className="showcase-video">
                <source src="/assets/video_production/SectorizacionAguaPotablePuyo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <h3>Project Title 1</h3>
            <p>Description of the first video project. Explain what was created, the goal, and the outcome.</p>
          </div>

          <div className="video-showcase-item">
            <div className="video-container">
              <video controls className="showcase-video">
                <source src="/assets/video_production/CPCSS.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <h3>Project Title 2</h3>
            <p>Description of the second video project. Highlight the unique aspects and achievements of this work.</p>
          </div>

          <div className="video-showcase-item">
            <div className="video-container">
              <video controls className="showcase-video">
                <source src="/assets/video_production/RenovaEnergia.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <h3>Project Title 3</h3>
            <p>Description of the third video project. Share the story behind the production and its impact.</p>
          </div>
        </div>
      </section>
    </>
  );
}
