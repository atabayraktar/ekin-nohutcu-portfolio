import { useEffect, useState } from "react";
import fs from "fs";
import path from "path";
import Head from "next/head";

import Header from "../components/Header";
import ProjectCardMini from "../components/ProjectCardMini";

export default function HomePage({ projects }) {
  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowGoTop(window.scrollY > 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Ekin Nohutçu | About Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page-wrapper">
        <div className="content-wrapper">
          <Header />
          <div className="page-title">/about-me</div>
          <div className="about-me-section">
            <div className="about-me-section-text">Hello, i’m Ekin!</div>
            <br />
            <div className="about-me-section-text">
              Game Developer with 7 years of professional experience in the
              gaming industry, including 2 years of leadership as the head of a
              procedural modeling team.
            </div>
            <br />
            <div className="about-me-section-text">
              Highly passionate about graphics programming, procedural content
              generation, and the creation of robust, scalable systems that push
              the boundaries of interactive design and performance. I specialize
              in building innovative pipelines and tools that enhance both
              artistic flexibility and technical efficiency.
            </div>
            <br />
            <div className="about-me-section-text">
              Over the course of my career, I’ve contributed to multiple stages
              of game development—from engine-level programming to tool creation
              and gameplay systems—always with a strong focus on optimizing
              workflows and achieving visual and technical excellence. My recent
              work has centered on integrating procedural modeling techniques
              into production environments, leading cross-disciplinary teams,
              and collaborating closely with artists and designers to ensure
              both creative vision and technical feasibility are met.
            </div>
            <br />
            <div className="about-me-section-text">
              With a solid foundation in computer science and hands-on
              experience in engines such as Unity, I bring a deep understanding
              of rendering, shaders, simulation systems, and automation tools. I
              am driven by a curiosity for solving complex technical challenges
              and a desire to continually evolve with the industry through
              research, experimentation, and collaboration.
            </div>
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
          <div className="education-section">
            <div className="section-header">
              <h2>#education</h2>
              <span className="line"></span>
            </div>
            <div className="education-item">
              Marmara University | Bachelor Degree on Computer Engineering
            </div>
            <div className="accomplishments-section">
              <div className="section-header">
                <h2>#accomplishments</h2>
                <span className="line"></span>
              </div>
              <div className="accomplishments-item">
                Foundations of Project Management | Google (July 2025)
              </div>
              <div className="accomplishments-item">
                Shader Development from Scratch for Unity with Cg | Udemy (March
                2020)
              </div>
              <div className="accomplishments-item">
                Responsive Web Design | freeCodeCamp (July 2019){" "}
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
