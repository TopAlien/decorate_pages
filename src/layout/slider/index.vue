<template>
  <div class="slider_group" v-for="group in slider" :key="group.id">
    <h4 class="slider_group--title">{{ group.label }}</h4>
    <draggable :list="group.children" :group="{ name: 'slide_drag', pull: 'clone', put: false }" item-key="id">
        <template #item="{ element }">
          <div class="slide_item">
            <img :src="element.icon" />
            <div>{{ element.label }}</div>
          </div>
        </template>
    </draggable>
  </div>
</template>

<script setup>
import { slider } from './setting.js';
import draggable from 'vuedraggable';
</script>

<style>
.slider_group {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
}
.slide_item {
  width: 80px;
  padding: 10px 0 10px;
  box-sizing: border-box;
  margin-bottom: 20px;
  text-align: center;
  font-size: 12px;
}

.slide_item:hover {
  cursor: move;
  color: white;
  background-color: #155bd4;
}

.slider_group--title {
  width: 100%;
}
</style>
