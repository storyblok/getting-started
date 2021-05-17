import Layout from '../components/Layout'
import Page from '../components/Page'

// The Storyblok Client
import Storyblok from "../lib/storyblok"
import useStoryblok from "../lib/storyblok-hook"

export default function Home(props) {
  // the Storyblok hook to enable live updates
  const story = useStoryblok(props.story)

  return (
    <Layout>
      <Page content={story.content} />
    </Layout>
  )
}

export async function getStaticProps(context) {
  // the slug of the story
  let slug = "home"
  // the storyblok params
  let params = {
    version: "draft", // or 'published'
  }

  // checks if Next.js is in preview mode
  if (context.preview) {
    // loads the draft version
    params.version = "draft"
    // appends the cache version to get the latest content
    params.cv = Date.now()
  }

  // loads the story from the Storyblok API
  let { data } = await Storyblok.get(`cdn/stories/${slug}`, params)

  // return the story from Storyblok and whether preview mode is active
  return {
    props: {
      story: data ? data.story : false,
      preview: context.preview || false
    },
    revalidate: 10,
  }
}
