<template>
  <div class="render_wrap">
    <PhoneView>
      <div
        v-for="widget in props.widgets"
        :key="widget.id"
        :class="['widget_item', widget.id === currentWidget.id && 'widget_item--active']"
        @click="handleClickWidget(widget)"
      >
        <component :is="renderComponentsMap[widget.name]" :widget="widget" />
      </div>
    </PhoneView>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PhoneView from '../../components/PhoneView.vue';
import renderComponentsMap from './renderComponentsMap';

const props = defineProps({
  widgets: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['setCurrentWidget']);

const currentWidget = ref({});
const handleClickWidget = current => {
  currentWidget.value = current;
  emit('setCurrentWidget', current);
};
</script>

<style scoped>
@import url('./index.css');
</style>
