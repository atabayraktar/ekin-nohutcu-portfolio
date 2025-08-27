import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../../components/Header";

export default function AboutMe() {
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
        <div className="bg-container about-me">
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
            <div className="page-title">
              <span>/</span>about-me
            </div>
            <div className="about-me-section">
              <div className="about-me-section-text">Hello, i’m Ekin!</div>
              <br />
              <div className="about-me-section-text">
                Game Developer with 7 years of professional experience in the
                gaming industry, including 2 years of leadership as the head of
                a procedural modeling team.
              </div>
              <br />
              <div className="about-me-section-text">
                Highly passionate about graphics programming, procedural content
                generation, and the creation of robust, scalable systems that
                push the boundaries of interactive design and performance. I
                specialize in building innovative pipelines and tools that
                enhance both artistic flexibility and technical efficiency.
              </div>
              <br />
              <div className="about-me-section-text">
                Over the course of my career, I’ve contributed to multiple
                stages of game development—from engine-level programming to tool
                creation and gameplay systems—always with a strong focus on
                optimizing workflows and achieving visual and technical
                excellence. My recent work has centered on integrating
                procedural modeling techniques into production environments,
                leading cross-disciplinary teams, and collaborating closely with
                artists and designers to ensure both creative vision and
                technical feasibility are met.
              </div>
              <br />
              <div className="about-me-section-text">
                With a solid foundation in computer science and hands-on
                experience in engines such as Unity, I bring a deep
                understanding of rendering, shaders, simulation systems, and
                automation tools. I am driven by a curiosity for solving complex
                technical challenges and a desire to continually evolve with the
                industry through research, experimentation, and collaboration.
              </div>
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
                    <span className="desktop-only">
                      Frameworks &amp; Methodologies
                    </span>
                    <span className="mobile-only">Project Management</span>
                  </div>
                  <div className="skill-desc">
                    <span className="desktop-only">
                      Agile, Waterfall, Kanban, Scrum, Scrumban
                    </span>
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
                  <div className="skill-title">
                    <span className="desktop-only">Databases</span>
                    <span className="mobile-only">
                      Frameworks &amp; Methodologies
                    </span>
                  </div>
                  <div className="skill-desc">
                    <span className="desktop-only">PostgreSQL</span>
                    <span className="mobile-only">
                      Agile, Waterfall, Kanban, Scrum, Scrumban
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="education-section">
              <div className="section-header">
                <span>#</span>education
                <span className="line"></span>
              </div>
              <div className="education-item desktop-only">
                Marmara University | Bachelor Degree on Computer Engineering
              </div>
              <div className="education-item mobile-only">
                <div className="education-item-text">Marmara University</div>
                <div className="education-item-text">
                  Bachelor Degree on Computer Engineering
                </div>
              </div>
            </div>
            <div className="accomplishments-section">
              <div className="section-header">
                <span>#</span>accomplishments
                <span className="line"></span>
              </div>
              <div className="accomplishments-item desktop-only">
                Foundations of Project Management | Google (July 2025),
              </div>
              <div className="accomplishments-item desktop-only">
                Shader Development from Scratch for Unity with Cg | Udemy (March
                2020)
              </div>
              <div className="accomplishments-item desktop-only">
                Responsive Web Design | freeCodeCamp (July 2019)
              </div>
              <div className="accomplishments-item mobile-only">
                <div className="accomplishments-item-text">
                  Foundations of Project Management
                </div>
                <div className="accomplishments-item-text">
                  Google (July 2025)
                </div>
              </div>
              <div className="accomplishments-item mobile-only">
                <div className="accomplishments-item-text">
                  Shader Development for Unity with Cg
                </div>
                <div className="accomplishments-item-text">
                  Udemy (March 2020)
                </div>
              </div>
              <div className="accomplishments-item mobile-only">
                <div className="accomplishments-item-text">
                  Responsive Web Design
                </div>
                <div className="accomplishments-item-text">
                  freeCodeCamp (July 2019)
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
