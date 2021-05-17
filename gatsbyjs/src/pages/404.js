import * as React from "react"
import SbEditable from 'storyblok-react'

import Layout from "../components/layout"
import DynamicComponent from "../components/DynamicComponent"
import useStoryblok from "../utils/storyblok-service"

const NotFoundPage = ({ location }) => { 
  let components = null
  let story = useStoryblok(null, location)

  if(story) {
    components = story.content.body.map(blok => {
      return (<DynamicComponent blok={blok} key={blok._uid} />)
    })
  }

  return (
  <Layout>
    <SbEditable content={story ? story.content : false }>
    <h1>{ story ? story.name : 'Not Found' }</h1>
    { components }
    </SbEditable>
  </Layout>
)}

export default NotFoundPage