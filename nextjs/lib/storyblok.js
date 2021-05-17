import StoryblokClient from 'storyblok-js-client'

const Storyblok = new StoryblokClient({
    accessToken: 'd6IKUtAUDiKyAhpJtrLFcwtt',
    cache: {
      clear: 'auto',
      type: 'memory'
    }
})

export default Storyblok
