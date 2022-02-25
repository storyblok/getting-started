import Layout from "../components/Layout";
import DynamicComponent from "../components/DynamicComponent";

import storyblokApi, { useStoryblok } from "../lib/storyblok";

export default function Home({ story }) {
  // the Storyblok hook to enable live updates
  story = useStoryblok(story);

  return (
    <Layout>
      <DynamicComponent blok={story.content} />
    </Layout>
  );
}

export async function getStaticProps() {
  // the slug of the story
  let slug = "home";
  // the storyblok params
  let params = {
    version: "draft", // or 'published'
  };

  // loads the story from the Storyblok API
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, params);

  // return the story from Storyblok
  return {
    props: {
      story: data ? data.story : false,
    },
  };
}
