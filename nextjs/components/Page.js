import Component from './index'
import SbEditable from 'storyblok-react'

const Page = ({content}) => (
  <SbEditable content={content}>
    <main className="px-6">
      {content.body.map((blok) =>
        <Component blok={blok} key={blok._uid} />
      )}
    </main>
  </SbEditable>
)

export default Page
