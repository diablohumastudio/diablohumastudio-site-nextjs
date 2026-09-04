import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { commonDict } from '../i18n/common';
import { useT } from '../i18n/useT';
import LanguageSwitch from './LanguageSwitch';
import s from './Header.module.css';

const NAV_LINKS: { href: string; labelKey: 'navCourses' | 'navNvcGame' | 'navVideos' | 'navContact' }[] = [
  { href: '/courses', labelKey: 'navCourses' },
  { href: '/nvc-game', labelKey: 'navNvcGame' },
  { href: '/video-production', labelKey: 'navVideos' },
  { href: '/contact', labelKey: 'navContact' },
];

export default function Header() {
  const t = useT(commonDict);
  const router = useRouter();
  const menuToggleRef = useRef<HTMLInputElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  // The mobile menu is a CSS checkbox hack (globals.css); close it whenever
  // the visitor interacts with the page instead of the menu.
  useEffect(() => {
    function closeMenu() {
      if (menuToggleRef.current) menuToggleRef.current.checked = false;
    }
    function handleDocumentClick(event: MouseEvent) {
      const target = event.target as Node | null;
      if (target && headerRef.current?.contains(target)) return;
      closeMenu();
    }
    document.addEventListener('click', handleDocumentClick);
    window.addEventListener('scroll', closeMenu, { passive: true });
    router.events.on('routeChangeStart', closeMenu);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
      window.removeEventListener('scroll', closeMenu);
      router.events.off('routeChangeStart', closeMenu);
    };
  }, [router.events]);

  return (
    <header className="header" ref={headerRef}>
      <Link href="/" className="logo">
        <Image
          src="/assets/general/header_logo.png"
          alt="Diablo Huma Studio"
          width={120}
          height={40}
          priority
        />
      </Link>
      <input type="checkbox" id="menu-toggle" className="menu-toggle" ref={menuToggleRef} />
      <label htmlFor="menu-toggle" className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <nav className="nav">
        <div className="site-pages-nav">
          {NAV_LINKS.map(({ href, labelKey }) => {
            const isActive = router.pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`site-page-link ${s.navLink}${isActive ? ` ${s.navLinkActive}` : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {t[labelKey]}
              </Link>
            );
          })}
          <LanguageSwitch />
        </div>
      </nav>
    </header>
  );
}
