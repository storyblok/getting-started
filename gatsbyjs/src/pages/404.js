import * as React from "react"

import Page from "../components/Page";
import Layout from "../components/Layout"
import useStoryblok from "../utils/storyblok-service"

const NotFoundPage = ({ location }) => { 
  let content = (<h1>Not Found</h1>)
  let story = useStoryblok(null, location)

  if(story) {
    content = (<Page blok={story.content} />)
  }

  return (
  <Layout>
    { content }
  </Layout>
)}

export default NotFoundPage