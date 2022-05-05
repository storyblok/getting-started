<script setup>
import { useRoute } from '@nuxtjs/composition-api'
import { useStoryblok } from '@storyblok/nuxt'

const route = useRoute()
const slug = route.value.params.pathMatch

const { story, fetchState } = useStoryblok(slug ? slug : 'home', {
  version: 'draft',
})
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
