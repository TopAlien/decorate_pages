<template>
  <div class="render_wrap">
    <PhoneView>
      <div class="render_header" @click="handleClickWidget({}, -1)">{{ props.pageConfig.title || '页面标题' }}</div>
      <draggable
        class="widget_dragWrap"
        :list="props.widgets"
        item-key="id"
        :sort="false"
        :group="{ name: 'slide_drag' }"
      >
        <template #item="{ element, index }">
          <div
            :class="['widget_item', index === props.currentWidgetIndex && 'widget_item--active']"
            @click="handleClickWidget(element, index)"
          >
            <component :is="renderComponentsMap[element.name]" :widget="element" />
            <a-button-group class="group_delete">
              <a-button class="widget_item--delete">
                {{ element.label }}
              </a-button>
              <a-popconfirm position="top" content="确认删除该组件吗?" @ok="deleteWidget(element, props)">
                <a-button>
                  <template #icon>
                    <icon-delete />
                  </template>
                </a-button>
              </a-popconfirm>
            </a-button-group>
          </div>
        </template>
      </draggable>
    </PhoneView>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import draggable from 'vuedraggable';
import PhoneView from '../../components/PhoneView.vue';
import renderComponentsMap from '../../autoImport/renderComponentsMap.js';
import { deleteWidget } from '../../utils';

const props = defineProps({
  widgets: {
    type: Array,
    required: true,
  },
  pageConfig: {
    type: Object,
    default: () => {},
  },
  panel: {
    type: Array,
    default: () => [],
  },
  currentWidgetIndex: {
    type: Number
  }
});

const emit = defineEmits(['setCurrentWidget']);

const handleClickWidget = (current, index) => {
  emit('setCurrentWidget', current, index);
};
</script>

<style scoped>
@import url('./index.css');
</style>
