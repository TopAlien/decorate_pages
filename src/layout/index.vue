<template>
  <div class="layout">
    <div class="layout_slider">
      <Slider />
    </div>
    <Render />
    <Setting />
  </div>
</template>

<script setup>
import Slider from './slider/index.vue';
import Render from './render/index.vue';
import Setting from './setting/index.vue';
</script>

<style>
.layout{
  display: flex;
  justify-content: space-between;
}

.layout_slider{
  width: 280px;
  height: 100vh;
  overflow-y: scroll;
  background-color: white;
}
</style>