import Head from 'next/head';
import Image from 'next/image';

export default function Courses() {
  return (
    <>
      <Head>
        <title>Godot Master – Diablo Huma Studios</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index,follow" />
      </Head>

      {/* Hero Section */}
      <section className="hero-section hero-section-courses">
        <Image
          className="hero-image hero-image-courses"
          src="/assets/courses/Godot_Hero_bad_neon_big.png"
          alt="Godot Master Hero Image"
          width={744}
          height={727}
          priority
        />
      </section>

      <section className="learn-process-section">
        <h1>Turn into a Godot Expert with our Courses!</h1>
        <p>Godot Engine is a Free cross-platform tool, that allows users to create 2D and 3D games!</p>
        <div className="learn-process-items">
          <div className="learn-process-item">
            <Image
              src="/assets/courses/ciompu.png"
              alt="Download Godot Engine"
              width={200}
              height={200}
            />
            <h3>1. Download Godot Engine</h3>
          </div>
          <div className="learn-process-item">
            <Image
              src="/assets/courses/Courses_Opt_Circle.png"
              alt="Choose a course"
              width={200}
              height={200}
            />
            <h3>2. Choose one of our courses</h3>
          </div>
          <div className="learn-process-item">
            <Image
              src="/assets/courses/course.png"
              alt="Access high quality content"
              width={200}
              height={200}
            />
            <h3>3. Access instantly to high quality content!</h3>
          </div>
        </div>
        <div className="courses-buttons">
          <a href="#" className="btn">Get Our Udemy Course</a>
          <a href="#" className="btn">Get Our YouTube Course</a>
        </div>
        {/* Covers the section to dim it and swallow clicks while the courses are WIP */}
        <div className="under-development-overlay">
          <div className="under-development-banner">UNDER DEVELOPMENT</div>
        </div>
      </section>
    </>
  );
}
