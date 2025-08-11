import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";
import Head from "next/head";

import Header from "../components/Header";
import Filter from "../components/Filter";
import Headlines from "../components/Headlines";
import HeadlineItemCard from "../components/HeadlineItemCard";

export default function HomePage({ headlines }) {
  const [filter, setFilter] = useState("ai");
  const [activeHeadlineIndex, setActiveHeadlineIndex] = useState(null);
  const [showGoTop, setShowGoTop] = useState(false);
  const router = useRouter();

  const filteredHeadlines =
    filter === "ai" ? headlines.filter((h) => h.isAI) : headlines;

  const handleHeadlineClick = (index, headline) => {
    setActiveHeadlineIndex(index);
    router.push(`/ad/${headline.slug}`);
  };

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
        <title>KızlarSoruyor | Reklam Modelleri</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Headlines
        headlines={headlines}
        activeHeadline={activeHeadlineIndex}
        handleHeadlineClick={handleHeadlineClick}
      />
      <div className="page-wrapper">
        <div className="content-wrapper">
          <Filter selected={filter} onChange={setFilter} />
          {filteredHeadlines.map((headline, index) => (
            <HeadlineItemCard
              key={headline.slug}
              headline={headline}
              onClick={() => router.push(`/ad/${headline.slug}`)}
            />
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
