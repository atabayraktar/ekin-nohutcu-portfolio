import "../styles/globals.scss";
import { useRouter } from "next/router";
import { useEffect } from "react";


const REVEAL_SELECTORS = [
  ".section-header",
  ".skill-item",
  ".project-card-mini",
  ".about-me-text",
  ".contact-msg-box",
  ".contact-text",
  ".education-item",
  ".accomplishments-item",
  ".about-me-section-text",
  ".page-title",
].join(", ");

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    let lenis;
    import("lenis").then(({ default: Lenis }) => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      lenis = new Lenis({
        lerp: 0.08,
        smoothWheel: true,
        smoothTouch: isMobile,
        touchMultiplier: isMobile ? 2.5 : 2,
      });
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    });
    return () => lenis?.destroy();
  }, []);

  useEffect(() => {
    let observer = null;

    const timer = setTimeout(() => {
      const targets = Array.from(document.querySelectorAll(REVEAL_SELECTORS));
      if (!targets.length) return;

      targets.forEach((el) => el.classList.add("will-reveal"));

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
      );

      targets.forEach((el) => observer.observe(el));
    }, 650);

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, [router.asPath]);

  return (
    <div className="route-fade" key={router.asPath}>
      <Component {...pageProps} />
    </div>
  );
}
