import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
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
            Courses
          </Link>
          <Link href="/nvc-game" className="site-page-link">
            NvC Game
          </Link>
          <Link href="/video-production" className="site-page-link">
            Videos
          </Link>
        </div>
      </nav>
    </header>
  );
}
