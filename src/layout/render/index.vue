<template>
  <div class="render_wrap">
    <PhoneView>
      <div class="render_header" @click="handleClickHeader">页面标题</div>
      <draggable class="widget_dragWrap" :list="props.widgets" item-key="id" :group="{ name: 'slide_drag' }">
        <template #item="{ element, index }">
          <div
            :class="['widget_item', index === currentWidgetIndex && 'widget_item--active']"
            @click="handleClickWidget(element, index)"
          >
            <component :is="renderComponentsMap[element.name]" :widget="element" />
            <a-button-group class="group_delete">
              <a-button class="widget_item--delete">
                {{ element.label }}
              </a-button>
              <a-button>
                <template #icon>
                  <icon-delete />
                </template>
              </a-button>
            </a-button-group>
          </div>
        </template>
      </draggable>
    </PhoneView>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { IconDelete } from '@arco-design/web-vue/es/icon';
import draggable from 'vuedraggable';
import PhoneView from '../../components/PhoneView.vue';
import renderComponentsMap from './renderComponentsMap';

const props = defineProps({
  widgets: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['setCurrentWidget', 'setPage']);

const currentWidgetIndex = ref(null);
const handleClickWidget = (current, index) => {
  currentWidgetIndex.value = index;
  emit('setCurrentWidget', current, index);
};

const handleClickHeader = () => {
  emit('setPage');
};
</script>

<style scoped>
@import url('./index.css');
</style>
