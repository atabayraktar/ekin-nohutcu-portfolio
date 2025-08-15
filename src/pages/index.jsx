import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";
import Head from "next/head";

import Header from "../components/Header";
import ProjectCardMini from "../components/ProjectCardMini";

export default function HomePage({ projects }) {
  const [showGoTop, setShowGoTop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => {
      setShowGoTop(window.scrollY > 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <Head>
        <title>Ekin Nohutçu | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page-wrapper">
        <div className="bg-container home">
          <div className="content-wrapper">
            <Header />
            <div className="intro-section">
              <div className="intro-text">
                Ekin is a <span>game developer</span> and
                <span> project manager</span>.
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
                  <h2>#projects</h2>
                  <span className="line"></span>
                </div>
                <a href="/projects">View all &#126;&#126;&gt; </a>
              </div>
              {projects.slice(0, isMobile ? 1 : 3).map((project, index) => (
                <ProjectCardMini
                  key={project.slug}
                  project={project}
                  onClick={() => {}}
                />
              ))}
            </div>
            <div className="skills-section">
              <div className="section-header">
                <h2>#skills</h2>
                <span className="line"></span>
              </div>
              <div className="skills-container">
                <div className="skill-item1">
                  <div className="skill-title">Tools</div>
                  <div className="skill-desc">
                    VSCode, Unity3D, Blender, Figma, Houdini, Git
                  </div>
                </div>
                <div className="skill-item2">
                  <div className="skill-title">Languages</div>
                  <div className="skill-desc">C#, Java, Python, C</div>
                </div>
                <div className="skill-item3">
                  <div className="skill-title">Databases</div>
                  <div className="skill-desc">PostgreSQL</div>
                </div>
                <div className="skill-item4">
                  <div className="skill-title">Project Management</div>
                  <div className="skill-desc">
                    ClickUp, Trello, Monday, Miro, MS Office, Jİra
                  </div>
                </div>
                <div className="skill-item5">
                  <div className="skill-title">Frameworks & Methodologies</div>
                  <div className="skill-desc">
                    Agile, Waterfall, Kanban, Scrum, Scrumban
                  </div>
                </div>
              </div>
            </div>
            <div className="about-me-section">
              <div className="section-header">
                <h2>#about-me</h2>
                <span className="line"></span>
              </div>
              <div className="about-me-content">
                <div className="about-me-text">Hello, i'm Ekin!</div>
                <br />
                <div className="about-me-text">
                  Game Developer with 7 years of professional experience in the
                  gaming industry, including 2 years of leadership as the head
                  of a procedural modeling team.
                </div>
                <div className="about-me-read-more">
                  <a href="/about">Read More</a>
                </div>
              </div>
            </div>
            <div className="contact-section">
              <div className="section-header">
                <h2>#contact</h2>
                <span className="line"></span>
              </div>
              <div className="contact-content">
                <div className="contact-text">
                  I’m interested in freelance opportunities. However, if you
                  have other request or question, don’t hesitate to contact me
                </div>
                <div className="contact-msg-box">
                  <div className="contact-msg-box-title">Message me here</div>
                  <div className="contact-msg-box-info-container">
                    <img src="/images/icons/email.png" alt="Contact" />
                    <div className="contact-msg-box-info">
                      ekinnohutc@gmail.com
                    </div>
                  </div>
                </div>
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
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  return {
    props: {
      projects: data.data,
    },
  };
}
