import "../styles/globals.scss";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div className="route-fade" key={router.asPath}>
      <Component {...pageProps} />
    </div>
  );
}
