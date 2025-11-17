import Image from 'next/image';

export default function Footer() {
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
                alt="Link to Studio Steam account"
                width={20}
                height={20}
                loading="lazy"
              />
            </a>
            <a href="#">
              <Image
                className="social-icon"
                src="/assets/general/youtube_icon_orange.png"
                alt="Link to Studio Youtube account"
                width={20}
                height={20}
                loading="lazy"
              />
            </a>
            <a href="#">
              <Image
                className="social-icon"
                src="/assets/general/x_social_icon_orange.png"
                alt="Link to Studio X social account"
                width={20}
                height={20}
                loading="lazy"
              />
            </a>
            <a href="#">
              <Image
                className="social-icon"
                src="/assets/general/instagram_icon_orange.png"
                alt="Link to Studio Instagram account"
                width={20}
                height={20}
                loading="lazy"
              />
            </a>
          </div>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2024 Diablo Huma Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
