<script setup>
import { useStoryblok } from '@storyblok/nuxt-2'
const { story, fetchState } = useStoryblok('home', { version: 'draft' })
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
