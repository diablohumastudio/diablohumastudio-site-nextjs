'use client';

import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

const DOWNLOAD_URL = 'https://drive.google.com/file/d/1Vzuirw6rsJVDD54rv2v8sLuhbnWKZdnm/view?usp=sharing';
const ITCHIO_URL = 'https://diablohumastudio.itch.io/nazis-vs-commies';
const ITCHIO_PASSWORD = 'nazisvscommies';

export default function NvCGame() {
  const [showModal, setShowModal] = useState(false);
  const [showItchModal, setShowItchModal] = useState(false);

  function handleDownloadClick() {
    setShowModal(true);
  }

  function handleConfirm() {
    window.open(DOWNLOAD_URL, '_blank', 'noopener,noreferrer');
    setShowModal(false);
  }

  function handleCancel() {
    setShowModal(false);
  }

  function handleItchClick() {
    setShowItchModal(true);
  }

  function handleItchConfirm() {
    window.open(ITCHIO_URL, '_blank', 'noopener,noreferrer');
    setShowItchModal(false);
  }

  function handleItchCancel() {
    setShowItchModal(false);
  }

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

      {/* Download Section */}
      <section className="download-section" id="download">
        <h2>GET THE GAME</h2>
        <div className="direct-download-button">
          <button className="download-link download-link-btn" onClick={handleDownloadClick}>
            <Image
              src="/assets/NvC/demo_direct_download_button.svg"
              alt="Demo Direct Download"
              width={250}
              height={81}
              className="download-button-image"
            />
          </button>
          <button className="download-link download-link-btn" onClick={handleItchClick}>
            <Image
              src="/assets/NvC/demo_itchio_download_button.svg"
              alt="Demo Download on itch.io"
              width={250}
              height={81}
              className="download-button-image"
            />
          </button>
        </div>

        {showModal && (
          <div className="modal-overlay" onClick={handleCancel}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
              <h3 className="modal-title">Before you download</h3>
              <ul className="modal-list">
                <li>You will be redirected to <strong>Google Drive</strong> to download the demo.</li>
                <li>After downloading, <strong>unzip the file</strong> and make sure both the <code>.exe</code> and <code>.dll</code> files are in the <strong>same folder</strong> before running the game.</li>
                <li>
                  The file is <strong>100% safe</strong> — no viruses, no malware. When you double-click the <code>.exe</code>, Windows Defender SmartScreen may show a warning. Click <strong>&ldquo;More information&rdquo;</strong> and then <strong>&ldquo;Run anyway&rdquo;</strong> to launch the game.
                </li>
              </ul>
              <div className="modal-actions">
                <button className="modal-btn modal-btn-confirm" onClick={handleConfirm}>Continue to Download</button>
                <button className="modal-btn modal-btn-cancel" onClick={handleCancel}>Cancel</button>
              </div>
            </div>
          </div>
        )}

        {showItchModal && (
          <div className="modal-overlay" onClick={handleItchCancel}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
              <h3 className="modal-title">Before you download</h3>
              <ul className="modal-list">
                <li>You will be redirected to <strong>itch.io</strong> to download the demo.</li>
                <li>
                  The itch.io page is <strong>password-protected</strong>. Use the password: <code>{ITCHIO_PASSWORD}</code>
                </li>
                <li>After downloading, <strong>unzip the file</strong> and make sure both the <code>.exe</code> and <code>.dll</code> files are in the <strong>same folder</strong> before running the game.</li>
                <li>
                  The file is <strong>100% safe</strong> — no viruses, no malware. When you double-click the <code>.exe</code>, Windows Defender SmartScreen may show a warning. Click <strong>&ldquo;More information&rdquo;</strong> and then <strong>&ldquo;Run anyway&rdquo;</strong> to launch the game.
                </li>
              </ul>
              <div className="modal-actions">
                <button className="modal-btn modal-btn-confirm" onClick={handleItchConfirm}>Continue to itch.io</button>
                <button className="modal-btn modal-btn-cancel" onClick={handleItchCancel}>Cancel</button>
              </div>
            </div>
          </div>
        )}
        <div className="platform-download-buttons">
          <div className="download-link download-link-disabled" aria-disabled="true">
            <Image
              src="/assets/NvC/wishlist_in_steam_button.svg"
              alt="Wishlist on Steam"
              width={250}
              height={71}
              className="download-button-image"
            />
            <span className="coming-soon-badge">COMING SOON</span>
          </div>
          <div className="download-link download-link-disabled" aria-disabled="true">
            <Image
              src="/assets/NvC/download_in_app_store_button.svg"
              alt="Download on App Store"
              width={250}
              height={81}
              className="download-button-image"
            />
            <span className="coming-soon-badge">COMING SOON</span>
          </div>
          <div className="download-link download-link-disabled" aria-disabled="true">
            <Image
              src="/assets/NvC/download_in_google_play_button.svg"
              alt="Get it on Google Play"
              width={250}
              height={71}
              className="download-button-image"
            />
            <span className="coming-soon-badge">COMING SOON</span>
          </div>
        </div>
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

      {/* Trailer Section */}
      <section className="trailer-section" id="trailer">
        <h2>TRAILER</h2>
        <div className="trailer-video-container">
          <video controls className="trailer-video" poster="/assets/NvC/nvc_logo.png">
            <source src="/assets/NvC/gameplay_preview.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </>
  );
}
