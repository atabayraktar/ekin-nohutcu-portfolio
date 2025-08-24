import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <header className="header">
      <div className="header-content">
        <Link
          href="/"
          className={`header-text ${router.pathname === "/" ? "active" : ""}`}
        >
          <span>#</span>
          home
        </Link>

        <Link
          href="/projects"
          className={`header-text ${
            router.pathname.startsWith("/projects") ? "active" : ""
          }`}
        >
          <span>#</span>
          projects
        </Link>

        <Link
          href="/about-me"
          className={`header-text ${
            router.pathname.startsWith("/about-me") ? "active" : ""
          }`}
        >
          <span>#</span>
          about-me
        </Link>
      </div>
    </header>
  );
}
