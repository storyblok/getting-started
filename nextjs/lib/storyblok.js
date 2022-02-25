import { useEffect, useState } from "react";
import { storyblokInit, apiPlugin, useStoryblokBridge } from "@storyblok/js";

const { storyblokApi } = storyblokInit({
  accessToken: "d6IKUtAUDiKyAhpJtrLFcwtt",
  use: [apiPlugin],
});

export function useStoryblok(originalStory) {
  let [story, setStory] = useState(originalStory);

  useStoryblokBridge(story.id, (newStory) => setStory(newStory));

  useEffect(() => {
    setStory(originalStory);
  }, [originalStory]);

  return story;
}

export default storyblokApi;
