<template>
  <a-collapse class="collapse_slide" :default-active-key="defaultActive" expand-icon-position="right">
    <a-collapse-item v-for="group in slider" :key="group.id" :header="group.label">
      <draggable
        class="slider_group"
        :list="group.children"
        :group="{ name: 'slide_drag', pull: 'clone', put: false }"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="slide_item">
            <img :src="element.icon" />
            <div class="slider_label">{{ element.label }}</div>
          </div>
        </template>
      </draggable>
    </a-collapse-item>
  </a-collapse>
</template>

<script setup>
import { ref } from 'vue';
import draggable from 'vuedraggable';
import { slider } from './setting.js';

const defaultActive = ref(slider.map(item => item.id));
</script>

<style>
.collapse_slide .arco-collapse-item-content{
  padding: 13px;
}
.slider_wrap {
  padding: 10px 10px 0;
}
.slider_group {
  width: 100%;
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
.slide_item {
  width: 80px;
  padding: 10px 0 10px;
  box-sizing: border-box;
  margin-bottom: 20px;
  text-align: center;
  font-size: 12px;
  color: rebeccapurple;
}

.slider_label {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
}

.slide_item img {
  width: 32px;
  height: 32px;
  margin-bottom: 5px;
  border-radius: 5px;
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
