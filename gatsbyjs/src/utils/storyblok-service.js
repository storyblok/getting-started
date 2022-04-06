import { useEffect, useState } from "react"
import { useStoryblokBridge } from "@storyblok/js";

export function useStoryblok(originalStory) {
  const storyCopy = { ...originalStory }
  if (typeof storyCopy.content === "string") storyCopy.content = JSON.parse(storyCopy.content)

  const modifiedId = storyCopy.id.split('-')
  storyCopy.id = parseInt(modifiedId[1])

  let [story, setStory] = useState(storyCopy);

  useEffect(() => {
    // eslint-disable-next-line
    useStoryblokBridge(story.id, (newStory) => setStory(newStory));
  }, []);

  return story;
}