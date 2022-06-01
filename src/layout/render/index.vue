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
            :class="['widget_item', index === currentWidgetIndex && 'widget_item--active']"
            @click="handleClickWidget(element, index)"
          >
            <component :is="renderComponentsMap[element.name]" :widget="element" />
            <a-button-group class="group_delete">
              <a-button class="widget_item--delete">
                {{ element.label }}
              </a-button>
              <a-popconfirm position="left" content="确认删除该组件吗?" @ok="handleDelete(element)">
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
import { IconDelete } from '@arco-design/web-vue/es/icon';
import draggable from 'vuedraggable';
import PhoneView from '../../components/PhoneView.vue';
import renderComponentsMap from '../../autoImport/renderComponentsMap.js';

const props = defineProps({
  widgets: {
    type: Array,
    required: true,
  },
  pageConfig: {
    type: Object,
    default: () => {},
  },
});

const emit = defineEmits(['setCurrentWidget']);

const currentWidgetIndex = ref(null);
const handleClickWidget = (current, index) => {
  currentWidgetIndex.value = index;
  emit('setCurrentWidget', current, index);
};

const handleDelete = ({ id }) => {
  const index = props.widgets.findIndex(item => item.id === id);
  if (index >= 0) {
    props.widgets.splice(index, 1);
  }
};
</script>

<style scoped>
@import url('./index.css');
</style>
