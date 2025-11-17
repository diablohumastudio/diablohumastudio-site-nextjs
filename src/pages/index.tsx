import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Diablo Huma Studio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <Image
          className="hero-image"
          src="/assets/home/hero-image.png"
          alt="Diablo Huma Studio"
          width={1920}
          height={1080}
          priority
        />
      </section>

      {/* Games Section */}
      <main className="main-content">
        <section className="games-section">
          <h2>OUR GAMES</h2>
          <div className="game">
            <div className="game-logo">
              <Image
                src="/assets/home/nvc_square.png"
                alt="Logo of NvC game"
                width={900}
                height={900}
                loading="lazy"
              />
            </div>
            <div className="game-platform-icons">
              <a href="#" className="platform-icon">
                <Image
                  src="/assets/home/orange_android.png"
                  alt="Link to android download NvC game"
                  width={60}
                  height={60}
                  loading="lazy"
                />
              </a>
              <a href="#" className="platform-icon">
                <Image
                  src="/assets/home/orange_appstore.png"
                  alt="Link to appstore download NvC game"
                  width={60}
                  height={60}
                  loading="lazy"
                />
              </a>
              <a href="#" className="platform-icon">
                <Image
                  src="/assets/home/orange_steam.png"
                  alt="Link to steam_icon_orange download NvC game"
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
