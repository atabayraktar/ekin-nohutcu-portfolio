import { useEffect, useState, useCallback } from "react";
import useBodyScrollLock from "../hooks/useBodyScrollLock";
import Head from "next/head";
import Header from "../components/Header";
import ProjectCardMini from "../components/ProjectCardMini";
import ProjectCardBig from "../components/ProjectCardBig";
import WiggleText from "../components/WiggleText";

function useIsMobile(maxWidth = 768) {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${maxWidth}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    if (mq.addEventListener) {
      mq.addEventListener("change", update);
      return () => mq.removeEventListener("change", update);
    } else {
      mq.addListener(update);
      return () => mq.removeListener(update);
    }
  }, [maxWidth]);

  return isMobile;
}

export default function HomePage({ projects }) {
  const [showGoTop, setShowGoTop] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const isMobile = useIsMobile(768);

  useEffect(() => {
    const onScroll = () => setShowGoTop(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useBodyScrollLock(Boolean(selectedProject));

  const beginClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsClosing(false);
    }, 300);
  }, []);

  useEffect(() => {
    if (!selectedProject) return;
    const onKey = (e) => e.key === "Escape" && beginClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedProject, beginClose]);

  return (
    <>
      <Head>
        <title>Ekin Nohutçu | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page-wrapper">
        <div className="bg-container home">
          <div className="social-icons-desktop">
            <a
              href="/ekin-nohutcu-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/icons/cv.svg" alt="CV (PDF)" />
            </a>
            <a
              href="https://github.com/ekinnohutcu"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/icons/github.png" alt="github icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/ekinnohutcu/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/icons/linkedin.png" alt="linkedin icon" />
            </a>
            <a
              href="mailto:ekinnohutc@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/icons/email.png" alt="email icon" />
            </a>
          </div>
          <div className="social-icons-mobile">
            <a
              href="/ekin-nohutcu-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/icons/cv.svg" alt="CV (PDF)" />
            </a>
            <a
              href="https://github.com/ekinnohutcu"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/icons/github.png" alt="github icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/ekinnohutcu/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/icons/linkedin.png" alt="linkedin icon" />
            </a>
            <a
              href="mailto:ekinnohutc@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/icons/email.png" alt="email icon" />
            </a>
          </div>
          <div className="content-wrapper">
            <Header />
            <div className="intro-section">
              <div className="intro-text">
                Ekin is a <WiggleText text="game developer" /> and {""}
                <WiggleText text="project manager" />.
              </div>
              <img
                className="intro-image"
                src="/images/ekin-image.png"
                alt="ekin nohutçu img"
              />
            </div>
            <div className="projects-section">
              <div className="section-header">
                <div className="section-header-left">
                  <span>#</span>projects
                  <span className="line"></span>
                </div>
                <a
                  className="section-header-right desktop-only"
                  href="/projects"
                >
                  View all &#126;&#126;&gt;
                </a>
              </div>
              <div className="project-cards">
                {isMobile !== null &&
                  projects
                    .slice(0, isMobile ? 1 : 3)
                    .map((project) => (
                      <ProjectCardMini
                        key={project.id}
                        project={project}
                        onClick={() => setSelectedProject(project)}
                      />
                    ))}
              </div>
              <a className="view-all-mobile mobile-only" href="/projects">
                View all &#126;&#126;&gt;
              </a>
            </div>
            <div className="skills-section">
              <div className="section-header">
                <span>#</span>skills
                <span className="line"></span>
              </div>
              <div className="skills-container">
                <div className="skill-item one">
                  <div className="skill-title">Tools</div>
                  <div className="skill-desc">
                    VSCode, Unity3D, Blender, Figma, Houdini, Git
                  </div>
                </div>
                <div className="skill-item two">
                  <div className="skill-title">Languages</div>
                  <div className="skill-desc">C#, Java, Python, C</div>
                </div>
                <div className="skill-item three">
                  <div className="skill-title">
                    <span className="desktop-only">Databases</span>
                    <span className="mobile-only">Project Management</span>
                  </div>
                  <div className="skill-desc">
                    <span className="desktop-only">PostgreSQL</span>
                    <span className="mobile-only">
                      ClickUp, Trello, Monday, Miro, MS Office, Jira
                    </span>
                  </div>
                </div>

                <div className="skill-item four">
                  <div className="skill-title">
                    <span className="desktop-only">Project Management</span>
                    <span className="mobile-only">Databases</span>
                  </div>
                  <div className="skill-desc">
                    <span className="desktop-only">
                      ClickUp, Trello, Monday, Miro, MS Office, Jira
                    </span>
                    <span className="mobile-only">PostgreSQL</span>
                  </div>
                </div>

                <div className="skill-item five">
                  <div className="skill-title">Frameworks & Methodologies</div>
                  <div className="skill-desc">
                    Agile, Waterfall, Kanban, Scrum, Scrumban
                  </div>
                </div>
              </div>
            </div>
            <div className="about-me-section">
              <div className="section-header">
                <span>#</span>about-me
                <span className="line"></span>
              </div>
              <div className="about-me-text">Hello, i'm Ekin!</div>
              <div className="about-me-text">
                Game Developer with 7 years of professional experience in the
                gaming industry, including 2 years of leadership as the head of
                a procedural modeling team.
              </div>
              <div className="about-me-read-more">
                <a href="/about-me">Read more →</a>
              </div>
            </div>
            <div className="contact-section">
              <div className="section-header">
                <span>#</span>contact
                <span className="line"></span>
              </div>
              <div className="contact-content">
                <div className="contact-text">
                  I’m interested in freelance opportunities. However, if you
                  have other request or question, don’t hesitate to contact me
                </div>
                <a
                  href="mailto:ekinnohutc@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="contact-msg-box">
                    <div className="contact-msg-box-title">Message me here</div>
                    <div className="contact-msg-box-info-container">
                      <img src="/images/icons/email.png" alt="Contact" />
                      <div className="contact-msg-box-info">
                        ekinnohutc@gmail.com
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        className={`go-top ${showGoTop ? "visible" : ""}`}
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      ></a>
      {selectedProject && (
        <div
          className={`modal-overlay ${isClosing ? "is-closing" : "is-open"}`}
          onClick={beginClose}
        >
          <div
            className={`modal-content ${isClosing ? "is-closing" : "is-open"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              style={{ cursor: "pointer" }}
              onClick={beginClose}
              src="/images/icons/close.png"
              alt="Close icon"
            />
            <ProjectCardBig project={selectedProject} />
          </div>
        </div>
      )}
    </>
  );
}

export async function getStaticProps() {
  const fs = require("fs");
  const path = require("path");
  const filePath = path.join(process.cwd(), "public", "data.json");
  const json = JSON.parse(fs.readFileSync(filePath, "utf8"));

  const projects = json.data.map((p, idx) => ({
    ...p,
    id: `${p.title}-${idx}`,
  }));

  return { props: { projects } };
}
