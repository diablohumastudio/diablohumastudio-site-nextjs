import Head from 'next/head';
import { useRouter } from 'next/router';
import { DEFAULT_LOCALE, LOCALES, SITE_URL, localizedPath } from '../i18n/locales';

/* Tells search engines that /x and /es/x are the same page in two languages.
   Only for indexed pages: the /learn section is noindex and has its own layout. */
export default function Alternates() {
  const { asPath } = useRouter();
  const path = asPath.split(/[?#]/)[0];

  return (
    <Head>
      {LOCALES.map((locale) => (
        <link key={locale} rel="alternate" hrefLang={locale} href={`${SITE_URL}${localizedPath(locale, path)}`} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${localizedPath(DEFAULT_LOCALE, path)}`} />
    </Head>
  );
}
