<script setup>
import { useStoryblok } from '@storyblok/nuxt'
const { story, fetchState } = useStoryblok('home', { version: 'draft' })
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
