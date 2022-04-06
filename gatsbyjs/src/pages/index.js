import React from "react";
// import Page from "../components/Page";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import configuration from '../../gatsby-config'
import { useStoryblok } from "../utils/storyblok-service"
import { storyblokInit, apiPlugin, StoryblokComponent, storyblokEditable } from "@storyblok/react";

import Teaser from '../components/teaser'
import Grid from '../components/grid'
import Feature from '../components/feature'

const sbConfig = configuration.plugins.find((item) => item.resolve === 'gatsby-source-storyblok')

storyblokInit({
  accessToken: sbConfig.options.accessToken,
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
  }
})

const IndexPage = ({ data, location }) => {
  let story = data.story;
  story = useStoryblok(story);

  const components = story.content.body.map(blok => (<StoryblokComponent blok={blok} key={blok._uid} />))

  return (
    <Layout location={location}>
      <div {...storyblokEditable(story.content)}>
        {components}
      </div>
    </Layout>
  );
};

export default IndexPage;
export const query = graphql`
  {
    story: storyblokEntry(full_slug: { eq: "home" }) {
      name
      content
      full_slug
      uuid
      id
    }
  }
`;
