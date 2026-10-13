import Head from 'next/head';
import Image from 'next/image';
import { coursesDict } from '../i18n/pages/courses';
import { useT } from '../i18n/useT';
import s from './Courses.module.css';

export default function Courses() {
  const t = useT(coursesDict);

  return (
    <>
      <Head>
        <title>{t.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index,follow" />
      </Head>

      {/* Hero Section */}
      <section className={s.heroSection}>
        <Image
          className={s.heroImage}
          src="/assets/courses/Godot_Hero_bad_neon_big.png"
          alt={t.heroAlt}
          width={744}
          height={727}
          priority
        />
      </section>

      <section className={s.learnProcessSection}>
        <h1>{t.heading}</h1>
        <p>{t.intro}</p>
        <div className={s.learnProcessItems}>
          <div className={s.learnProcessItem}>
            <Image
              src="/assets/courses/ciompu.png"
              alt={t.step1Alt}
              width={200}
              height={200}
            />
            <h3>{t.step1}</h3>
          </div>
          <div className={s.learnProcessItem}>
            <Image
              src="/assets/courses/Courses_Opt_Circle.png"
              alt={t.step2Alt}
              width={200}
              height={200}
            />
            <h3>{t.step2}</h3>
          </div>
          <div className={s.learnProcessItem}>
            <Image
              src="/assets/courses/course.png"
              alt={t.step3Alt}
              width={200}
              height={200}
            />
            <h3>{t.step3}</h3>
          </div>
        </div>
        <div className={s.coursesButtons}>
          <a href="#" className={s.btn}>{t.udemyButton}</a>
          <a href="#" className={s.btn}>{t.youtubeButton}</a>
        </div>
        {/* Covers the section to dim it and swallow clicks while the courses are WIP */}
        <div className={s.underDevelopmentOverlay}>
          <div className={s.underDevelopmentBanner}>{t.underDevelopment}</div>
        </div>
      </section>
    </>
  );
}
