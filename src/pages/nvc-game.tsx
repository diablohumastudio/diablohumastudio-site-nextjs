import Head from 'next/head';
import Image from 'next/image';

export default function NvCGame() {
  return (
    <>
      <Head>
        <title>NvC Game – Diablo Huma Studios</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index,follow" />
        <meta name="description" content="NvC - An exciting game by Diablo Huma Studios. Available on Steam, App Store, and Google Play." />
      </Head>

      {/* Hero Section with Video Background */}
      <section className="hero-section hero-section-nvc">
        <div className="video-background">
          <video autoPlay loop muted playsInline className="hero-video">
            <source src="/assets/NvC/new_grlitched_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </div>
        <div className="hero-content-nvc">
          <Image
            src="/assets/NvC/nvc_logo.png"
            alt="Nazis vs Communists"
            width={600}
            height={200}
            className="nvc-logo"
            priority
          />
          <p className="game-tagline">Learn WWII history by getting adicted to this incredible TD</p>
        </div>
      </section>

      {/* Symbol Section */}
      <section className="symbol-section">
        <Image
          src="/assets/NvC/giratory_logo.gif"
          alt="NvC Symbol"
          width={300}
          height={300}
          className="giratory-symbol"
          unoptimized
        />
      </section>

      {/* Screenshots Section */}
      <section className="screenshots-section">
        <h2>SCREENSHOTS</h2>
        <div className="screenshots-grid">
          <div className="screenshot-item">
            <Image
              src="/assets/NvC/sample_image_1.png"
              alt="NvC Game Screenshot 1"
              width={800}
              height={450}
              className="screenshot-image"
            />
          </div>
          <div className="screenshot-item">
            <Image
              src="/assets/NvC/sample_image_2.png"
              alt="NvC Game Screenshot 2"
              width={800}
              height={450}
              className="screenshot-image"
            />
          </div>
          <div className="screenshot-item">
            <Image
              src="/assets/NvC/sample_image_3.png"
              alt="NvC Game Screenshot 3"
              width={800}
              height={450}
              className="screenshot-image"
            />
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="download-section">
        <h2>GET THE GAME</h2>
        <div className="download-buttons">
          <a href="#" className="download-link" target="_blank" rel="noopener noreferrer">
            <Image
              src="/assets/NvC/wishlist_in_steam_button.png"
              alt="Wishlist on Steam"
              width={300}
              height={100}
              className="download-button-image"
            />
          </a>
          <a href="#" className="download-link" target="_blank" rel="noopener noreferrer">
            <Image
              src="/assets/NvC/download_in_app_store_button.png"
              alt="Download on App Store"
              width={300}
              height={100}
              className="download-button-image"
            />
          </a>
          <a href="#" className="download-link" target="_blank" rel="noopener noreferrer">
            <Image
              src="/assets/NvC/download_in_google_play_button.png"
              alt="Get it on Google Play"
              width={300}
              height={100}
              className="download-button-image"
            />
          </a>
        </div>
      </section>
    </>
  );
}
