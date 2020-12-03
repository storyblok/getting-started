import React from 'react'
import Component from './DynamicComponent'
import SbEditable from 'storyblok-react'

const Page = ({blok}) => (
  <SbEditable content={blok}>
    <main className="px-6">
      {blok.body.map((blok) =>
        <Component blok={blok} key={blok._uid} />
      )}
    </main>
  </SbEditable>
)

export default Page
