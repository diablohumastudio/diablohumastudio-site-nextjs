import Head from 'next/head';

export default function IccaPitch2026() {
  return (
    <>
      <Head>
        <title>ICCA Pitch 2026</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <section className="icca-section">
        <div className="video-background">
          <video autoPlay loop muted playsInline className="hero-video">
            <source src="/assets/NvC/new_grlitched_video.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
        </div>
        <div className="icca-video-wrapper">
          <video controls className="icca-pitch-video">
            <source src="/assets/icca/icca_pitch_2026.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </>
  );
}
