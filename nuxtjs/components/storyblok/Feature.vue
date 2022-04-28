<template>
  <div v-editable="blok">
    <h1 class="text-xl">{{ blok.name }}</h1>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
