import Image from 'next/image';
import { commonDict } from '../i18n/common';
import { useT } from '../i18n/useT';

type SocialAltKey = 'footerSteamAlt' | 'footerInstagramAlt' | 'footerFacebookAlt' | 'footerYoutubeAlt'
  | 'footerTiktokAlt' | 'footerRedditAlt' | 'footerXAlt' | 'footerItchioAlt';

type SocialLink = { icon: string; href: string; altKey: SocialAltKey };

// Steam stays on '#' until the store page is published.
const SOCIAL_LINKS: SocialLink[] = [
  { icon: 'steam', href: '#', altKey: 'footerSteamAlt' },
  { icon: 'instagram', href: 'https://www.instagram.com/diablohumagamestudio/', altKey: 'footerInstagramAlt' },
  { icon: 'facebook', href: 'https://www.facebook.com/people/Diablohumastudio/61591330441991/', altKey: 'footerFacebookAlt' },
  { icon: 'youtube', href: 'https://www.youtube.com/@DiabloHumaStudio', altKey: 'footerYoutubeAlt' },
  { icon: 'tiktok', href: 'https://www.tiktok.com/@diablo_huma_studio', altKey: 'footerTiktokAlt' },
  { icon: 'reddit', href: 'https://www.reddit.com/r/DiabloHumaStudio/', altKey: 'footerRedditAlt' },
  { icon: 'x', href: 'https://x.com/diablo_huma_std', altKey: 'footerXAlt' },
  { icon: 'itchio', href: 'https://itch.io/profile/diablohumastudio', altKey: 'footerItchioAlt' },
];

export default function Footer() {
  const t = useT(commonDict);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-branding">
          <p>Diablo Huma Studio</p>
          <div className="social-icons">
            {SOCIAL_LINKS.map(({ icon, href, altKey }) => (
              <a
                key={icon}
                href={href}
                target={href === '#' ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={t[altKey]}
              >
                <Image
                  className="social-icon"
                  src={`/assets/general/social/${icon}_icon_orange.svg`}
                  alt={t[altKey]}
                  width={20}
                  height={20}
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="footer-copyright">
          <p>{t.footerCopyright}</p>
        </div>
      </div>
    </footer>
  );
}
