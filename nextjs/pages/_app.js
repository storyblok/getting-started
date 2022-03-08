import "../styles/tailwind.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";

storyblokInit({
  accessToken: "d6IKUtAUDiKyAhpJtrLFcwtt",
  use: [apiPlugin],
  components: {
    feature: Feature,
    grid: Grid,
    teaser: Teaser,
    page: Page,
  },
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
