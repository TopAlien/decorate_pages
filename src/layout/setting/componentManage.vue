<template>
  <div>
    <a-empty v-if="!props.widgets || props.widgets.length <= 0" description="暂无组件" />
    <draggable v-else :list="props.widgets" item-key="id">
      <template #item="{ element }">
        <a-button type="dashed" long class="component_manage--item">
          <template #icon>
            <icon-drag-arrow />
          </template>
          <span class="manage_item--label">
            <img class="manage_item--icon" :src="element.icon" alt="" /> {{ element.label }}</span
          >
          <a-popconfirm position="left" content="确认删除该组件吗?" @ok="handleDelete(element)">
            <span class="com_item--delete"> <icon-delete /> </span>
          </a-popconfirm>
        </a-button>
      </template>
    </draggable>
  </div>
</template>

<script setup>
import { IconDragArrow, IconDelete } from '@arco-design/web-vue/es/icon';
import { toRefs } from 'vue';
import draggable from 'vuedraggable';
import Header from './components/Header.vue';

const props = defineProps({
  widgets: {
    type: Array,
    default: () => [],
  },
});

const handleDelete = ({ id }) => {
  const index = props.widgets.findIndex(item => item.id === id);
  if (index >= 0) {
    props.widgets.splice(index, 1);
  }
};
</script>

<style scoped>
.component_manage--item {
  display: flex;
  align-items: center;
  cursor: move;
  margin-bottom: 12px;
}

.manage_item--label {
  flex: 1;
  height: 25px;
  line-height: 25px;
}

.com_item--delete {
  cursor: pointer;
}

.manage_item--icon {
  height: 25px;
  border-radius: 50%;
  margin-left: 10px;
  float: left;
}
</style>
