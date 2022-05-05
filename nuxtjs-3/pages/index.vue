<script setup>
const story = await useStoryblok('vue', { version: 'draft' });
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
