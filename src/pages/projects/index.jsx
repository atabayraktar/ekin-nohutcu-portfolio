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
        <title>Ekin Nohutçu | Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page-wrapper">
        <div className="content-wrapper">
          <Header />
          <div className="page-title">/projects</div>
          {projects.map((project) => (
            <ProjectCardMini key={project.slug} project={project} />
          ))}
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
