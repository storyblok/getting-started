<script setup>
import { useStoryblok } from '@storyblok/nuxt-2';
const { story } = useStoryblok('home', { version: 'draft' });
</script>

<template>
  <div>
    <StoryblokComponent v-if="story && story.content" :blok="story.content" />
  </div>
</template>
