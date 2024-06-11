import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header>
        <div className="container">
          <div className="header">
            <div className="header__logo">spinnin</div>
            <button className="header__hamburger">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </button>
          </div>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="hero">
            <div className="section section--medium--margin">
              <div className="hero__content">
                <h1 className="hero__title">
                  A digital <span> design</span> and{" "}
                  <span>development studio</span> located in{" "}
                  <span>Los Angeles</span>. We build <span>brands</span>, create{" "}
                  <span>digital experiences</span>, and shape the{" "}
                  <span>stories of tomorrow</span>.
                </h1>

                <Link href={"/"} className="button button--dark button--fx">
                  <span>
                    <span>Get in touch</span>
                  </span>

                  <svg
                    width="8"
                    height="8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.157 1.172a.5.5 0 0 0-.5-.5h-4.5a.5.5 0 0 0 0 1h4v4a.5.5 0 0 0 1 0v-4.5Zm-5.803 6.01L7.01 1.525 6.303.818.646 6.475l.708.707Z"
                      fill="#fff"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="section section--medium--margin">
              <div className="hero__image">
                <div className="hero__play">
                  <svg
                    width="92"
                    height="92"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="92" height="92" rx="46" fill="#fff" />
                    <path
                      d="m55 46.5-14.25 8.227V38.273L55 46.5Z"
                      fill="#1F1F1F"
                    />
                  </svg>
                  <p className="hero__play__text">Watch showreel</p>
                </div>
                <div className="relative" style={{ aspectRatio: "16/9" }}>
                  <Image src="/images/hero.jpg" alt="hero__image" fill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--medium--margin">
        <div className="container">
          <div className="text-columns">
            <h2 className="col-1--span-4">About us</h2>

            <p className="col-5--span-5">
              Our name reflects the core value of our agency. We like to keep
              things spinnin. Each project is an opportunity to deliver a new
              experinece to those that matter. Let us do a thing or two.
            </p>

            <Link
              href={"/"}
              className="button button--dark button--fx col-10--span-3"
            >
              <span>
                <span>Our studio</span>
              </span>

              <svg
                width="8"
                height="8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.157 1.172a.5.5 0 0 0-.5-.5h-4.5a.5.5 0 0 0 0 1h4v4a.5.5 0 0 0 1 0v-4.5Zm-5.803 6.01L7.01 1.525 6.303.818.646 6.475l.708.707Z"
                  fill="#fff"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--beige">
        <div className="container">
          <div className="projects">
            <div className="projects__left col-1--span-6 relative">
              <Image src="/images/project.jpg" alt="" fill />
            </div>
            <div className="projects__right col-7--span-6">
              <div className="projects__content">
                <h2 className="projects__heading h1">
                  A platform to elevate your edm production.
                </h2>
                <p className="projects__text">
                  Website built with Next.js, Tailwind CSS, GSAP, and Payload
                  CMS.
                </p>

                <Link href={"/"} className="button button--dark button--fx">
                  <span>
                    <span>Explore</span>
                  </span>

                  <svg
                    width="8"
                    height="8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.157 1.172a.5.5 0 0 0-.5-.5h-4.5a.5.5 0 0 0 0 1h4v4a.5.5 0 0 0 1 0v-4.5Zm-5.803 6.01L7.01 1.525 6.303.818.646 6.475l.708.707Z"
                      fill="#fff"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--medium--margin">
        <div className="container">
          <h2 className="list__heading">See our projects</h2>

          <ul className="list">
            <li className="list__item">
              <span className="col-1--span-5">A new way of thinking</span>
              <time className="col-6--span-5">October 10th, 2023</time>
              <span className="col-11--span-2">In House</span>
            </li>
            <li className="list__item">
              <span className="col-1--span-5">Technology in 2024</span>
              <time className="col-6--span-5">September 3rd, 2023</time>
              <span className="col-11--span-2">Beckenstreet 21</span>
            </li>
            <li className="list__item">
              <span className="col-1--span-5">
                The digital era — what is it?
              </span>
              <time className="col-6--span-5">September 4th, 2023</time>
              <span className="col-11--span-2">Beckenstreet 21</span>
            </li>
            <li className="list__item">
              <span className="col-1--span-5">
                Building brands and products
              </span>
              <time className="col-6--span-5">November 21st, 2023</time>
              <span className="col-11--span-2">In House</span>
            </li>
            <li className="list__item">
              <span className="col-1--span-5">Ecommerce 101</span>
              <time className="col-6--span-5">January 7th, 2024</time>
              <span className="col-11--span-2">Hillway Drive 28</span>
            </li>
            <li className="list__item">
              <span className="col-1--span-5">
                Crafting digital experiences
              </span>
              <time className="col-6--span-5">January 28th, 2024</time>
              <span className="col-11--span-2">Taunton Fairway 4</span>
            </li>
            <li className="list__item">
              <span className="col-1--span-5">A new way of thinking</span>
              <time className="col-6--span-5">October 10th, 2023</time>
              <span className="col-11--span-2">In House</span>
            </li>
            <li className="list__item">
              <span className="col-1--span-5">Technology in 2024</span>
              <time className="col-6--span-5">September 3rd, 2023</time>
              <span className="col-11--span-2">Beckenstreet 21</span>
            </li>
            <li className="list__item">
              <span className="col-1--span-5">
                The digital era — what is it?
              </span>
              <time className="col-6--span-5">September 4th, 2023</time>
              <span className="col-11--span-2">Beckenstreet 21</span>
            </li>
            <li className="list__item">
              <span className="col-1--span-5">
                Building brands and products
              </span>
              <time className="col-6--span-5">November 21st, 2023</time>
              <span className="col-11--span-2">In House</span>
            </li>
            <li className="list__item">
              <span className="col-1--span-5">Ecommerce 101</span>
              <time className="col-6--span-5">January 7th, 2024</time>
              <span className="col-11--span-2">Hillway Drive 28</span>
            </li>
            <li className="list__item">
              <span className="col-1--span-5">
                Crafting digital experiences
              </span>
              <time className="col-6--span-5">January 28th, 2024</time>
              <span className="col-11--span-2">Taunton Fairway 4</span>
            </li>
          </ul>

          <Link href={"/"} className="button button--dark button--fx">
            <span>
              <span>More talks</span>
            </span>

            <svg
              width="8"
              height="8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.157 1.172a.5.5 0 0 0-.5-.5h-4.5a.5.5 0 0 0 0 1h4v4a.5.5 0 0 0 1 0v-4.5Zm-5.803 6.01L7.01 1.525 6.303.818.646 6.475l.708.707Z"
                fill="#fff"
              />
            </svg>
          </Link>
        </div>
      </section>

      <section className="section section--small--padding section--dark">
        <div className="container">
          <div className="company">
            <div className="company__content">
              <h2 className="col-1--span-12">Join the studio</h2>

              <p className="col-1--span-5 ">
                How does a daily group breakfast, 30 days of vacation, a
                remote-friendly office, and our very own dog club sound to you?
                These are some of the things you can expect.
              </p>

              <Link
                href={"/"}
                className="button button--light button--fx col-7--span-6"
              >
                <span>
                  <span>Open positions</span>
                </span>

                <svg
                  width="8"
                  height="8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.157 1.172a.5.5 0 0 0-.5-.5h-4.5a.5.5 0 0 0 0 1h4v4a.5.5 0 0 0 1 0v-4.5Zm-5.803 6.01L7.01 1.525 6.303.818.646 6.475l.708.707Z"
                    fill="#fff"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--small--padding section--dark">
        <div className="image-grid">
          <div
            className="image-wrapper relative"
            style={{ aspectRatio: 5 / 7 }}
          >
            <Image src="/images/grid-1.jpg" alt="" fill />
          </div>
          <div
            className="image-wrapper relative"
            style={{ aspectRatio: 5 / 7 }}
          >
            <Image src="/images/grid-2.jpg" alt="" fill />
          </div>
          <div
            className="image-wrapper relative"
            style={{ aspectRatio: 5 / 7 }}
          >
            <Image src="/images/grid-3.jpg" alt="" fill />
          </div>
          <div
            className="image-wrapper relative"
            style={{ aspectRatio: 5 / 7 }}
          >
            <Image src="/images/grid-4.jpg" alt="" fill />
          </div>
          <div
            className="image-wrapper relative"
            style={{ aspectRatio: 5 / 7 }}
          >
            <Image src="/images/grid-5.jpg" alt="" fill />
          </div>
        </div>
      </section>

      <footer className="section section--dark footer__section">
        <div className="container">
          <div className="footer">
            <div className="footer__top">
              <div className="footer__logo col-1--span-5">spinnin</div>

              <ul className="footer__menu col-6--span-3">
                <li>Work</li>
                <li>Studio</li>
                <li>Contact</li>
              </ul>

              <ul className="footer__menu col-9--span-3">
                <li>Instagram</li>
                <li>LinkedIn</li>
                <li>Awwwards</li>
              </ul>
            </div>

            <div className="footer__bottom">
              <div className="col-1--span-5">
                <Link href={"/"}>Privacy</Link>
                <Link href={"/"}>Cookies</Link>
              </div>

              <p className="col-6--span-3">Los Angeles, CA</p>

              <a href="/" className="col-9--span-3">
                hey.spinnin@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
