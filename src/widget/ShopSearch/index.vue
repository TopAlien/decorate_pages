<style scoped>
  .shop_search{
    height: 50px;
  }
</style>
<template>
  <div class="shop_search">
    shop search
    {{ props.widget.label }}
  </div>
</template>

<script setup>
  const props = defineProps({
    widget: {
      type: Object,
      required: true
    }
  })
</script>