import { useEffect, useState, useCallback } from "react";
import useBodyScrollLock from "../../hooks/useBodyScrollLock";
import Head from "next/head";
import Header from "../../components/Header";
import ProjectCardMini from "../../components/ProjectCardMini";
import ProjectCardBig from "../../components/ProjectCardBig";
import Portal from "../../components/Portal";

export default function Projects({ projects }) {
  const [showGoTop, setShowGoTop] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

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
        <title>Ekin Nohutçu | Projects</title>
        <meta name="description" content="Browse Ekin Nohutçu's game development portfolio — Unity games, procedural modeling tools, hyper-casual titles, and graphics programming projects." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page-wrapper">
        <div className="bg-container projects">
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
              <img src="/images/icons/github.webp" alt="github icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/ekinnohutcu/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/icons/linkedin.webp" alt="linkedin icon" />
            </a>
            <a
              href="mailto:ekinnohutc@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/icons/email.webp" alt="email icon" />
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
              <img src="/images/icons/github.webp" alt="github icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/ekinnohutcu/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/icons/linkedin.webp" alt="linkedin icon" />
            </a>
            <a
              href="mailto:ekinnohutc@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/icons/email.webp" alt="email icon" />
            </a>
          </div>
          <div className="content-wrapper">
            <Header />
            <div className="page-title">
              <span>/</span>projects
            </div>
            <main style={{ width: "100%" }}>
            <div className="projects-container">
              {projects.map((project) => (
                <ProjectCardMini
                  project={project}
                  onClick={() => setSelectedProject(project)}
                  key={project.id}
                />
              ))}
            </div>
            </main>
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
        <Portal>
          <div
            className={`modal-overlay ${isClosing ? "is-closing" : "is-open"}`}
            onClick={beginClose}
          >
            <div
              className={`modal-content ${
                isClosing ? "is-closing" : "is-open"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                style={{ cursor: "pointer" }}
                onClick={beginClose}
                src="/images/icons/close.webp"
                alt="Close icon"
              />
              <ProjectCardBig project={selectedProject} />
            </div>
          </div>
        </Portal>
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
