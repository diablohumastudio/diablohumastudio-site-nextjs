import Link from 'next/link';
import Image from 'next/image';
import { commonDict } from '../i18n/common';
import { useT } from '../i18n/useT';
import LanguageSwitch from './LanguageSwitch';

export default function Header() {
  const t = useT(commonDict);

  return (
    <header className="header">
      <Link href="/" className="logo">
        <Image
          src="/assets/general/header_logo.png"
          alt="Diablo Huma Studio"
          width={120}
          height={40}
          priority
        />
      </Link>
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <nav className="nav">
        <div className="site-pages-nav">
          <Link href="/courses" className="site-page-link">
            {t.navCourses}
          </Link>
          <Link href="/nvc-game" className="site-page-link">
            {t.navNvcGame}
          </Link>
          <Link href="/video-production" className="site-page-link">
            {t.navVideos}
          </Link>
          <Link href="/contact" className="site-page-link">
            {t.navContact}
          </Link>
          <LanguageSwitch />
        </div>
      </nav>
    </header>
  );
}
