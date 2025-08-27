import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

export default function Portal({ children, rootId = "modal-root" }) {
  const [mounted, setMounted] = useState(false);

  const containerEl = useMemo(() => {
    if (typeof document === "undefined") return null;
    const el = document.createElement("div");
    el.setAttribute("data-portal", "");
    return el;
  }, []);

  useEffect(() => {
    if (!containerEl) return;

    const root = document.getElementById(rootId);
    if (!root) return;

    root.appendChild(containerEl);
    setMounted(true);

    return () => {
      try {
        root.removeChild(containerEl);
      } catch {}
      setMounted(false);
    };
  }, [containerEl, rootId]);

  if (!mounted || !containerEl) return null;
  return createPortal(children, containerEl);
}
