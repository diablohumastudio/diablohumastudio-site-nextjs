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
            <source src="/assets/video_production/videos/CentralReguladoraCaudal.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
          <div className="video-overlay video-overlay-black"></div>
        </div>
        <div className="hero-content-video">
          <h1>WE PRODUCE GOOD VIDEOS</h1>
          <h1>FAST AND ECONOMIC</h1>
        </div>
      </section>

      {/* Corporate Training & Education Section */}
      <section className="video-showcase-section">
        <h2 className="category-title">TRAINING &amp; EDUCATION</h2>
        <div className="video-showcase-grid">
          <div className="video-showcase-item">
            <div className="video-container">
              <video controls className="showcase-video" poster="/assets/video_production/videos/corporate_training/IntroductionToScenesAndNodes_v1_thumbnail.jpg">
                <source src="/assets/video_production/videos/corporate_training/IntroductionToScenesAndNodes_v1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <h3>Godot: Introduction to Scenes and Nodes</h3>
            <p>First lesson of our Godot Master course: how scenes and nodes fit together, explained from scratch.</p>
          </div>

          <div className="video-showcase-item">
            <div className="video-container">
              <video controls className="showcase-video" poster="/assets/video_production/videos/corporate_training/ProcesoEncendidoHidroelectricaLaurel_thumbnail.jpg">
                <source src="/assets/video_production/videos/corporate_training/ProcesoEncendidoHidroelectricaLaurel.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <h3>Hydroelectric Plant Start-up Procedure</h3>
            <p>Operator training video for the El Laurel hydroelectric plant: the full start-up sequence, step by step.</p>
          </div>
        </div>
      </section>

      {/* Business Presentations Section */}
      <section className="video-showcase-section">
        <h2 className="category-title">BUSINESS PRESENTATIONS</h2>
        <div className="video-showcase-grid">
          <div className="video-showcase-item">
            <div className="video-container">
              <video controls className="showcase-video" poster="/assets/video_production/videos/business_presentations/SectorizacionAguaPotablePuyo_thumbnail.jpg">
                <source src="/assets/video_production/videos/business_presentations/SectorizacionAguaPotablePuyo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <h3>Sectorización Agua Potable Puyo</h3>
            <p>Professional business presentation video.</p>
          </div>

          <div className="video-showcase-item">
            <div className="video-container">
              <video controls className="showcase-video" poster="/assets/video_production/videos/business_presentations/VideoCoandaMera_thumbnail.jpg">
                <source src="/assets/video_production/videos/business_presentations/VideoCoandaMera.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <h3>Video Coanda Mera</h3>
            <p>Professional business presentation video.</p>
          </div>
        </div>
      </section>

      {/* Marketing/Promotional Content Section */}
      <section className="video-showcase-section">
        <h2 className="category-title">MARKETING / PROMOTIONAL CONTENT</h2>
        <div className="video-showcase-grid video-showcase-grid-small">
          <div className="video-showcase-item">
            <div className="video-container">
              <video controls className="showcase-video" poster="/assets/video_production/videos/marketing/CPCSS_thumbnail.jpg">
                <source src="/assets/video_production/videos/marketing/CPCSS.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <h3>CPCSS</h3>
            <p>Engaging marketing and promotional content.</p>
          </div>

          <div className="video-showcase-item">
            <div className="video-container">
              <video controls className="showcase-video" poster="/assets/video_production/videos/marketing/RenovaEnergia_thumbnail.jpg">
                <source src="/assets/video_production/videos/marketing/RenovaEnergia.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <h3>Renova Energía</h3>
            <p>Engaging marketing and promotional content.</p>
          </div>
        </div>
      </section>

      {/* Games Video Content Section */}
      <section className="video-showcase-section">
        <h2 className="category-title">GAMES VIDEO CONTENT</h2>
        <div className="video-showcase-grid video-showcase-grid-small">
          <div className="video-showcase-item">
            <div className="video-container">
              <video controls className="showcase-video" poster="/assets/video_production/videos/games/NvC_Intro_sp-sub_thumbnail.jpg">
                <source src="/assets/video_production/videos/games/NvC_Intro_sp-sub.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <h3>NvC Game Intro</h3>
            <p>Game trailer and promotional content.</p>
          </div>
        </div>
      </section>
    </>
  );
}
