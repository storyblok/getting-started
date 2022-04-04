import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import Layout from "../components/Layout";
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export const loader = async () => {
  // the slug of the story
  let slug = "home";

  let params = {
    version: "draft", // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, params);

  return json(data?.story);
};

export default function Page() {
  let story = useLoaderData();

  story = useStoryblokState(story);

  return (
    <Layout>
      <StoryblokComponent blok={story.content} />
    </Layout>
  );
}
