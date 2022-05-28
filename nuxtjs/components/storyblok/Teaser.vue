<template>
  <div v-editable="blok" class="py-16 text-5xl font-bold text-center">
    {{ blok.headline }}
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
