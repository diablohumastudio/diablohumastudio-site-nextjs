'use client';

import Head from 'next/head';
import Image from 'next/image';
import { ReactNode, useState } from 'react';

const WINDOWS_DOWNLOAD_URL = 'https://drive.google.com/open?id=1bp8yi4pSKOiyuXPT3VtJK_pnPEot3E9L&usp=drive_fs';
const ITCHIO_URL = 'https://diablohumastudio.itch.io/nazis-vs-commies';
const ITCHIO_PASSWORD = 'nazisvscommies';

// Fill these in as each store page / build goes live. A null URL renders its
// button greyed out with a COMING SOON badge, so no other change is needed.
const ANDROID_APK_URL: string | null = null;
const STEAM_WISHLIST_URL: string | null = null;
const STEAM_DOWNLOAD_URL: string | null = null;
const GOOGLE_PLAY_BETA_URL: string | null = null;
const APP_STORE_BETA_URL: string | null = null;

const SCREENSHOT_COUNT = 5;

type ModalKey = 'windows' | 'itch' | 'android';

type DownloadButtonProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  href?: string | null;
  onClick?: () => void;
};

function DownloadButton({ src, alt, width, height, href, onClick }: DownloadButtonProps) {
  const image = (
    <Image src={src} alt={alt} width={width} height={height} className="download-button-image" />
  );

  if (onClick) {
    return (
      <button className="download-link download-link-btn" onClick={onClick} aria-label={alt}>
        {image}
      </button>
    );
  }

  if (href) {
    return (
      <a className="download-link" href={href} target="_blank" rel="noopener noreferrer">
        {image}
      </a>
    );
  }

  return (
    <div className="download-link download-link-disabled" aria-disabled="true">
      {image}
      <span className="coming-soon-badge">COMING SOON</span>
    </div>
  );
}

type DownloadModalProps = {
  confirmLabel: string;
  confirmHref: string;
  onClose: () => void;
  children: ReactNode;
};

function DownloadModal({ confirmLabel, confirmHref, onClose, children }: DownloadModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h3 className="modal-title">Before you download</h3>
        <ul className="modal-list">{children}</ul>
        <div className="modal-actions">
          <a
            className="modal-btn modal-btn-confirm"
            href={confirmHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
          >
            {confirmLabel}
          </a>
          <button className="modal-btn modal-btn-cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default function NvCGame() {
  const [activeModal, setActiveModal] = useState<ModalKey | null>(null);

  function closeModal() {
    setActiveModal(null);
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

        <div className="download-group">
          <h3 className="download-group-title">PC</h3>
          <div className="download-buttons-row">
            <DownloadButton
              src="/assets/NvC/demo_direct_download_button.svg"
              alt="Windows Direct Download"
              width={250}
              height={81}
              onClick={() => setActiveModal('windows')}
            />
            <DownloadButton
              src="/assets/NvC/demo_itchio_download_button.svg"
              alt="Demo Download on itch.io"
              width={250}
              height={81}
              onClick={() => setActiveModal('itch')}
            />
            <DownloadButton
              src="/assets/NvC/wishlist_in_steam_button.svg"
              alt="Wishlist on Steam"
              width={250}
              height={71}
              href={STEAM_WISHLIST_URL}
            />
            <DownloadButton
              src="/assets/NvC/download_in_steam_button.svg"
              alt="Download on Steam"
              width={250}
              height={71}
              href={STEAM_DOWNLOAD_URL}
            />
          </div>
        </div>

        <div className="download-group">
          <h3 className="download-group-title">MOBILE</h3>
          <div className="download-buttons-row">
            <DownloadButton
              src="/assets/NvC/android_direct_download_button.svg"
              alt="Android Direct Download"
              width={250}
              height={71}
              onClick={ANDROID_APK_URL ? () => setActiveModal('android') : undefined}
            />
            <DownloadButton
              src="/assets/NvC/beta_tester_google_play_button.svg"
              alt="Become a Beta Tester on Google Play"
              width={250}
              height={71}
              href={GOOGLE_PLAY_BETA_URL}
            />
            <DownloadButton
              src="/assets/NvC/beta_tester_app_store_button.svg"
              alt="Become a Beta Tester on the App Store"
              width={250}
              height={81}
              href={APP_STORE_BETA_URL}
            />
          </div>
        </div>

        {activeModal === 'windows' && (
          <DownloadModal
            confirmLabel="Continue to Download"
            confirmHref={WINDOWS_DOWNLOAD_URL}
            onClose={closeModal}
          >
            <li>You will be redirected to <strong>Google Drive</strong> to download the demo.</li>
            <li>After downloading, <strong>unzip the file</strong> and make sure both the <code>.exe</code> and <code>.dll</code> files are in the <strong>same folder</strong> before running the game.</li>
            <li>
              The file is <strong>100% safe</strong> — no viruses, no malware. When you double-click the <code>.exe</code>, Windows Defender SmartScreen may show a warning. Click <strong>&ldquo;More information&rdquo;</strong> and then <strong>&ldquo;Run anyway&rdquo;</strong> to launch the game.
            </li>
          </DownloadModal>
        )}

        {activeModal === 'itch' && (
          <DownloadModal
            confirmLabel="Continue to itch.io"
            confirmHref={ITCHIO_URL}
            onClose={closeModal}
          >
            <li>You will be redirected to <strong>itch.io</strong> to download the demo.</li>
            <li>
              The itch.io page is <strong>password-protected</strong>. Use the password: <code>{ITCHIO_PASSWORD}</code>
            </li>
            <li>After downloading, <strong>unzip the file</strong> and make sure both the <code>.exe</code> and <code>.dll</code> files are in the <strong>same folder</strong> before running the game.</li>
            <li>
              The file is <strong>100% safe</strong> — no viruses, no malware. When you double-click the <code>.exe</code>, Windows Defender SmartScreen may show a warning. Click <strong>&ldquo;More information&rdquo;</strong> and then <strong>&ldquo;Run anyway&rdquo;</strong> to launch the game.
            </li>
          </DownloadModal>
        )}

        {activeModal === 'android' && ANDROID_APK_URL && (
          <DownloadModal
            confirmLabel="Continue to Download"
            confirmHref={ANDROID_APK_URL}
            onClose={closeModal}
          >
            <li>You are about to download the <strong>.apk</strong> installer directly, outside the Google Play Store.</li>
            <li>Android blocks these installs by default. When prompted, allow <strong>&ldquo;Install unknown apps&rdquo;</strong> for the browser or file manager you downloaded with.</li>
            <li>
              The file is <strong>100% safe</strong> — no viruses, no malware. Google Play Protect may still warn about apps not distributed through the Play Store. Tap <strong>&ldquo;Install anyway&rdquo;</strong> to continue.
            </li>
          </DownloadModal>
        )}
      </section>

      {/* Screenshots Section */}
      <section className="screenshots-section">
        <h2>SCREENSHOTS</h2>
        <div className="screenshots-grid">
          {Array.from({ length: SCREENSHOT_COUNT }, (_, index) => index + 1).map((number) => (
            <div className="screenshot-item" key={number}>
              <Image
                src={`/assets/NvC/screenshots/Screenshot_${number}.png`}
                alt={`NvC Game Screenshot ${number}`}
                width={1920}
                height={1080}
                className="screenshot-image"
              />
            </div>
          ))}
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
