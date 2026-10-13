'use client';

import Head from 'next/head';
import Image from 'next/image';
import { ReactNode, useState } from 'react';
import { commonDict } from '../i18n/common';
import { nvcGameDict } from '../i18n/pages/nvcGame';
import { useT } from '../i18n/useT';
import hero from '../styles/hero.module.css';
import s from './NvcGame.module.css';

const WINDOWS_DOWNLOAD_URL = 'https://github.com/diablohumastudio/nvc-releases/releases/download/builds/NazisVsCommies-windows.zip';
const ITCHIO_URL = 'https://diablohumastudio.itch.io/nazis-vs-commies';
const ITCHIO_PASSWORD = 'nazisvscommies';

// Fill these in as each store page / build goes live. A null URL renders its
// button greyed out with a COMING SOON badge, so no other change is needed.
const MAC_DOWNLOAD_URL: string | null = 'https://github.com/diablohumastudio/nvc-releases/releases/download/builds/NazisVsCommies-mac.zip';
const ANDROID_APK_URL: string | null = 'https://github.com/diablohumastudio/nvc-releases/releases/download/builds/NazisVsCommies-android.apk';
const STEAM_WISHLIST_URL: string | null = null;
const STEAM_DOWNLOAD_URL: string | null = null;
const GOOGLE_PLAY_BETA_URL: string | null = null;
const APP_STORE_BETA_URL: string | null = null;

const SCREENSHOT_COUNT = 5;

type ModalKey = 'windows' | 'mac' | 'itch' | 'android';

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
    <Image src={src} alt={alt} width={width} height={height} className={s.downloadButtonImage} />
  );

  if (onClick) {
    return (
      <button className={s.downloadLinkBtn} onClick={onClick} aria-label={alt}>
        {image}
      </button>
    );
  }

  if (href) {
    return (
      <a className={s.downloadLink} href={href} target="_blank" rel="noopener noreferrer">
        {image}
      </a>
    );
  }

  return (
    <div className={s.downloadLinkDisabled} aria-disabled="true">
      {image}
      <span className={s.comingSoonBadge}>{comingSoonLabel}</span>
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
    <div className={s.modalOverlay} onClick={onClose}>
      <div className={s.modalBox} onClick={(e) => e.stopPropagation()}>
        <h3 className={s.modalTitle}>{title}</h3>
        <ul className={s.modalList}>
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
        <div className={s.modalActions}>
          <a
            className={s.modalBtnConfirm}
            href={confirmHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
          >
            {confirmLabel}
          </a>
          <button className={s.modalBtnCancel} onClick={onClose}>{cancelLabel}</button>
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
      <section className={s.heroSection}>
        <div className={hero.videoBackground}>
          <video autoPlay loop muted playsInline className={hero.heroVideo}>
            <source src="/assets/NvC/new_grlitched_video.mp4" type="video/mp4" />
            {common.videoUnsupported}
          </video>
          <div className={hero.videoOverlay}></div>
        </div>
        <div className={s.heroContent}>
          <Image
            src="/assets/NvC/nvc_logo.png"
            alt={t.logoAlt}
            width={600}
            height={200}
            className={s.logo}
            priority
          />
          <p className={s.tagline}>{t.tagline}</p>
        </div>
      </section>

      {/* Symbol Section */}
      <section className={s.symbolSection}>
        <Image
          src="/assets/NvC/giratory_logo.gif"
          alt={t.symbolAlt}
          width={300}
          height={300}
          className={s.giratorySymbol}
          unoptimized
        />
      </section>

      {/* Download Section */}
      <section className={s.downloadSection} id="download">
        <h2>{t.getTheGame}</h2>

        <div className={s.downloadGroup}>
          <h3 className={s.downloadGroupTitle}>{t.pcGroup}</h3>
          <div className={s.downloadButtonsRow}>
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

        <div className={s.downloadGroup}>
          <h3 className={s.downloadGroupTitle}>{t.macGroup}</h3>
          <div className={s.downloadButtonsRow}>
            <DownloadButton
              src="/assets/NvC/demo_direct_download_button.svg"
              alt={t.macDirectAlt}
              width={250}
              height={81}
              comingSoonLabel={t.comingSoon}
              onClick={MAC_DOWNLOAD_URL ? () => setActiveModal('mac') : undefined}
            />
          </div>
        </div>

        <div className={s.downloadGroup}>
          <h3 className={s.downloadGroupTitle}>{t.mobileGroup}</h3>
          <div className={s.downloadButtonsRow}>
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

        {activeModal === 'mac' && MAC_DOWNLOAD_URL && (
          <DownloadModal
            title={t.modalTitle}
            cancelLabel={t.modalCancel}
            confirmLabel={t.continueToDownload}
            confirmHref={MAC_DOWNLOAD_URL}
            steps={t.macSteps}
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
      <section className={s.screenshotsSection}>
        <h2>{t.screenshots}</h2>
        <div className={s.screenshotsGrid}>
          {Array.from({ length: SCREENSHOT_COUNT }, (_, index) => index + 1).map((number) => (
            <div className={s.screenshotItem} key={number}>
              <Image
                src={`/assets/NvC/screenshots/Screenshot_${number}.png`}
                alt={t.screenshotAlt(number)}
                width={1920}
                height={1080}
                className={s.screenshotImage}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Trailer Section */}
      <section className={s.trailerSection} id="trailer">
        <h2>{t.trailer}</h2>
        <div className={s.trailerVideoContainer}>
          <video controls className={s.trailerVideo} poster="/assets/NvC/nvc_logo.png">
            <source src="/assets/NvC/gameplay_preview.mp4" type="video/mp4" />
            {common.videoUnsupported}
          </video>
        </div>
      </section>
    </>
  );
}
