import Feature from "./Feature";
import Grid from "./Grid";
import Page from "./Page";
import Teaser from "./Teaser";
import Placeholder from "./Placeholder";

const Components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component blok={blok} />;
  }

  return <Placeholder componentName={blok.component} />;
};

export default DynamicComponent;
