<template>
  <div>
    <a-empty v-if="!props.widgets || props.widgets.length <= 0" description="暂无组件" />
    <draggable v-else :list="props.widgets" item-key="id">
      <template #item="{ element, index }">
        <a-button type="dashed" long class="component_manage--item">
          {{ index + 1 }}.
          <template #icon>
            <icon-drag-arrow />
          </template>
          <div class="manage_item--label">
            <img class="manage_item--icon" :src="element.icon" alt="" />
            <span>{{ element.label }}</span>
          </div>
          <a-popconfirm position="left" content="确认删除该组件吗?" @ok="deleteWidget(element, props)">
            <span class="com_item--delete"> <icon-delete /> </span>
          </a-popconfirm>
        </a-button>
      </template>
    </draggable>
  </div>
</template>

<script setup>
import draggable from 'vuedraggable';
import Header from './components/Header.vue';
import { deleteWidget } from '../../utils';

const props = defineProps({
  widgets: {
    type: Array,
    default: () => [],
  },
  panel: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped>
.component_manage--item {
  height: 55px;
  line-height: 55px;
  padding: 10px;
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
  border-radius: 2px;
  margin-left: 10px;
  float: left;
}
</style>
