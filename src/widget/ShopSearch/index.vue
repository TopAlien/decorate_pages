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

<style lang='less'>
.shop_search {
  height: 1000px;
}
</style>