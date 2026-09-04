'use client';

import Head from 'next/head';
import Image from 'next/image';
import { ReactNode, useState } from 'react';
import { commonDict } from '../i18n/common';
import { nvcGameDict } from '../i18n/pages/nvcGame';
import { useT } from '../i18n/useT';

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
  comingSoonLabel: string;
  href?: string | null;
  onClick?: () => void;
};

function DownloadButton({ src, alt, width, height, comingSoonLabel, href, onClick }: DownloadButtonProps) {
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
      <span className="coming-soon-badge">{comingSoonLabel}</span>
    </div>
  );
}

type DownloadModalProps = {
  title: string;
  cancelLabel: string;
  confirmLabel: string;
  confirmHref: string;
  steps: ReactNode[];
  onClose: () => void;
};

function DownloadModal({ title, cancelLabel, confirmLabel, confirmHref, steps, onClose }: DownloadModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h3 className="modal-title">{title}</h3>
        <ul className="modal-list">
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
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
          <button className="modal-btn modal-btn-cancel" onClick={onClose}>{cancelLabel}</button>
        </div>
      </div>
    </div>
  );
}

export default function NvCGame() {
  const [activeModal, setActiveModal] = useState<ModalKey | null>(null);
  const t = useT(nvcGameDict);
  const common = useT(commonDict);

  function closeModal() {
    setActiveModal(null);
  }

  return (
    <>
      <Head>
        <title>{t.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index,follow" />
        <meta name="description" content={t.description} />
      </Head>

      {/* Hero Section with Video Background */}
      <section className="hero-section hero-section-nvc">
        <div className="video-background">
          <video autoPlay loop muted playsInline className="hero-video">
            <source src="/assets/NvC/new_grlitched_video.mp4" type="video/mp4" />
            {common.videoUnsupported}
          </video>
          <div className="video-overlay"></div>
        </div>
        <div className="hero-content-nvc">
          <Image
            src="/assets/NvC/nvc_logo.png"
            alt={t.logoAlt}
            width={600}
            height={200}
            className="nvc-logo"
            priority
          />
          <p className="game-tagline">{t.tagline}</p>
        </div>
      </section>

      {/* Symbol Section */}
      <section className="symbol-section">
        <Image
          src="/assets/NvC/giratory_logo.gif"
          alt={t.symbolAlt}
          width={300}
          height={300}
          className="giratory-symbol"
          unoptimized
        />
      </section>

      {/* Download Section */}
      <section className="download-section" id="download">
        <h2>{t.getTheGame}</h2>

        <div className="download-group">
          <h3 className="download-group-title">{t.pcGroup}</h3>
          <div className="download-buttons-row">
            <DownloadButton
              src="/assets/NvC/demo_direct_download_button.svg"
              alt={t.windowsDirectAlt}
              width={250}
              height={81}
              comingSoonLabel={t.comingSoon}
              onClick={() => setActiveModal('windows')}
            />
            <DownloadButton
              src="/assets/NvC/demo_itchio_download_button.svg"
              alt={t.itchDemoAlt}
              width={250}
              height={81}
              comingSoonLabel={t.comingSoon}
              onClick={() => setActiveModal('itch')}
            />
            <DownloadButton
              src="/assets/NvC/wishlist_in_steam_button.svg"
              alt={t.steamWishlistAlt}
              width={250}
              height={71}
              comingSoonLabel={t.comingSoon}
              href={STEAM_WISHLIST_URL}
            />
            <DownloadButton
              src="/assets/NvC/download_in_steam_button.svg"
              alt={t.steamDownloadAlt}
              width={250}
              height={71}
              comingSoonLabel={t.comingSoon}
              href={STEAM_DOWNLOAD_URL}
            />
          </div>
        </div>

        <div className="download-group">
          <h3 className="download-group-title">{t.mobileGroup}</h3>
          <div className="download-buttons-row">
            <DownloadButton
              src="/assets/NvC/android_direct_download_button.svg"
              alt={t.androidDirectAlt}
              width={250}
              height={71}
              comingSoonLabel={t.comingSoon}
              onClick={ANDROID_APK_URL ? () => setActiveModal('android') : undefined}
            />
            <DownloadButton
              src="/assets/NvC/beta_tester_google_play_button.svg"
              alt={t.googlePlayBetaAlt}
              width={250}
              height={71}
              comingSoonLabel={t.comingSoon}
              href={GOOGLE_PLAY_BETA_URL}
            />
            <DownloadButton
              src="/assets/NvC/beta_tester_app_store_button.svg"
              alt={t.appStoreBetaAlt}
              width={250}
              height={81}
              comingSoonLabel={t.comingSoon}
              href={APP_STORE_BETA_URL}
            />
          </div>
        </div>

        {activeModal === 'windows' && (
          <DownloadModal
            title={t.modalTitle}
            cancelLabel={t.modalCancel}
            confirmLabel={t.continueToDownload}
            confirmHref={WINDOWS_DOWNLOAD_URL}
            steps={t.windowsSteps}
            onClose={closeModal}
          />
        )}

        {activeModal === 'itch' && (
          <DownloadModal
            title={t.modalTitle}
            cancelLabel={t.modalCancel}
            confirmLabel={t.continueToItch}
            confirmHref={ITCHIO_URL}
            steps={t.itchSteps(ITCHIO_PASSWORD)}
            onClose={closeModal}
          />
        )}

        {activeModal === 'android' && ANDROID_APK_URL && (
          <DownloadModal
            title={t.modalTitle}
            cancelLabel={t.modalCancel}
            confirmLabel={t.continueToDownload}
            confirmHref={ANDROID_APK_URL}
            steps={t.androidSteps}
            onClose={closeModal}
          />
        )}
      </section>

      {/* Screenshots Section */}
      <section className="screenshots-section">
        <h2>{t.screenshots}</h2>
        <div className="screenshots-grid">
          {Array.from({ length: SCREENSHOT_COUNT }, (_, index) => index + 1).map((number) => (
            <div className="screenshot-item" key={number}>
              <Image
                src={`/assets/NvC/screenshots/Screenshot_${number}.png`}
                alt={t.screenshotAlt(number)}
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
        <h2>{t.trailer}</h2>
        <div className="trailer-video-container">
          <video controls className="trailer-video" poster="/assets/NvC/nvc_logo.png">
            <source src="/assets/NvC/gameplay_preview.mp4" type="video/mp4" />
            {common.videoUnsupported}
          </video>
        </div>
      </section>
    </>
  );
}
