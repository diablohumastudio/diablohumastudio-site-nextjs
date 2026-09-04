import Image from 'next/image';
import { commonDict } from '../i18n/common';
import { useT } from '../i18n/useT';

export default function Footer() {
  const t = useT(commonDict);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-branding">
          <p>Diablo Huma Studio</p>
          <div className="social-icons">
            <a href="#">
              <Image
                className="social-icon"
                src="/assets/general/steam_icon_orange.png"
                alt={t.footerSteamAlt}
                width={20}
                height={20}
                loading="lazy"
              />
            </a>
            <a href="#">
              <Image
                className="social-icon"
                src="/assets/general/youtube_icon_orange.png"
                alt={t.footerYoutubeAlt}
                width={20}
                height={20}
                loading="lazy"
              />
            </a>
            <a href="#">
              <Image
                className="social-icon"
                src="/assets/general/x_social_icon_orange.png"
                alt={t.footerXAlt}
                width={20}
                height={20}
                loading="lazy"
              />
            </a>
            <a href="#">
              <Image
                className="social-icon"
                src="/assets/general/instagram_icon_orange.png"
                alt={t.footerInstagramAlt}
                width={20}
                height={20}
                loading="lazy"
              />
            </a>
          </div>
        </div>
        <div className="footer-copyright">
          <p>{t.footerCopyright}</p>
        </div>
      </div>
    </footer>
  );
}
