import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-text" onClick={() => router.push("/")}>
          <span>#</span>
          home
        </div>
        <div className="header-text" onClick={() => router.push("/projects")}>
          <span>#</span>
          projects
        </div>
        <div className="header-text" onClick={() => router.push("/about-me")}>
          <span>#</span>
          about-me
        </div>
      </div>
    </header>
  );
}
