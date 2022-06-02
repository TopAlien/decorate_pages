<template>
  <a-collapse class="collapse_slide" :default-active-key="defaultActive" expand-icon-position="right">
    <a-collapse-item v-for="(group, index) in props.panel" :key="group.id" :header="group.label">
      <draggable
        class="panel_group"
        :list="group.children"
        :group="{ name: 'slide_drag', pull: 'clone', put: false }"
        item-key="id"
        handle=".mover"
        @end="target => handleClone(target, index)"
      >
        <template #item="{ element }">
          <div :class="['slide_item', hasMover(element)]">
            <img :src="element.icon" />
            <div class="panel_label">{{ element.label }}</div>
            <p class="select_proportion" v-show="element.maxCount">
              <span>{{ element.currentCount || 0 }}/{{ element.maxCount }}</span>
            </p>
          </div>
        </template>
      </draggable>
    </a-collapse-item>
  </a-collapse>
</template>

<script setup>
import { ref, computed } from 'vue';
import draggable from 'vuedraggable';

const props = defineProps({
  panel: {
    type: Array,
    default: () => [],
  },
});

const defaultActive = ref(props.panel.map(item => item.id));

const hasMover = computed(() => element => {
  if (element && element.maxCount && Number(element.currentCount || 0) >= Number(element.maxCount || 0)) {
    console.log('超过限制 不能拖动了！');
    return 'cus_pointer';
  }
  return 'mover';
});

const handleClone = (target, groupIndex) => {
  if (target.pullMode === 'clone') {
    try {
      const count = Number(props.panel[groupIndex].children[target.oldIndex].currentCount || 0);
      props.panel[groupIndex].children[target.oldIndex].currentCount = count + 1;
    } catch {
      console.error('计数问题');
    }
  }
};
</script>

<style>
.collapse_slide .arco-collapse-item-content {
  padding: 13px;
}
.panel_wrap {
  padding: 10px 10px 0;
}
.panel_group {
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
  color: #323233;
}

.panel_label {
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
  border-radius: 2px;
}

.panel_group--title {
  width: 100%;
}

.cus_pointer {
  cursor: pointer !important;
}

.select_proportion {
  font-size: 10px;
  color: #7d7e80;
  margin: 4px;
}
</style>
