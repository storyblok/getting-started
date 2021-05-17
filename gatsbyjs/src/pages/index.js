import React from "react";
import Page from "../components/Page";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import useStoryblok from "../utils/storyblok-service"

const IndexPage = ({ data, location }) => {
  let story = data.story;
  story = useStoryblok(story, location);

  return (
    <Layout location={location}>
      <Page blok={story.content} />
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
    }
  }
`;
