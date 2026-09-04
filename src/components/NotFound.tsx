import Head from 'next/head';
import Link from 'next/link';
import { commonDict } from '../i18n/common';
import { useT } from '../i18n/useT';
import s from './NotFound.module.css';

export default function NotFound() {
  const t = useT(commonDict);

  return (
    <>
      <Head>
        <title>{t.notFoundTitle}</title>
        <meta name="robots" content="noindex" />
      </Head>
      <section className={s.section}>
        <p className={s.code}>404</p>
        <h1 className={s.heading}>{t.notFoundHeading}</h1>
        <p className={s.text}>{t.notFoundText}</p>
        <Link href="/" className={s.link}>
          {t.notFoundHome}
        </Link>
      </section>
    </>
  );
}
