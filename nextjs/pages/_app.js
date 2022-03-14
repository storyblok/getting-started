import "../styles/tailwind.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};

storyblokInit({
  accessToken: "d6IKUtAUDiKyAhpJtrLFcwtt",
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
