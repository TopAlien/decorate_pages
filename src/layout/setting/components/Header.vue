<template>
  <div class="setting_header">
    <h2> {{ props.title }}</h2>
    <a-divider style="border-bottom-style: dashed" />
  </div>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
      required: true
    }
  })
</script>
