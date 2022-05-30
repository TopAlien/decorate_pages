<template>
  <div class="layout">
    <div class="layout_slider">
      <Slider />
    </div>
    <Render :widgets="decoratePage.widgets" @setCurrentWidget="setCurrentWidget" />
    <div class="layout_setting">
      <div class="layout_setting--btns">
        <div
          v-for="item in settingBtn"
          :key="item.id"
          :class="['btn-item', currentSetting === item.actionType && 'btn-item--active']"
          @click="handleSetting(item.actionType)"
        >
          {{ item.label }}
        </div>
      </div>

      <div class="layout_setting--box">
        <PageSetting v-if="currentSetting === 'pageSetting'" :config="currentWidget.initPageConfig" />
        <ComponentSetting v-if="currentSetting === 'componentSetting'" :config="currentWidget.initComponentConfig" />
        <ComponentManage v-if="currentSetting === 'componentManage'" :widgets="decoratePage.widgets" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import Slider from './slider/index.vue';
import Render from './render/index.vue';
import PageSetting from './setting/pageSetting.vue';
import ComponentSetting from './setting/componentSetting.vue';
import ComponentManage from './setting/componentManage.vue';

const decoratePage = reactive({
  widgets: [
    {
      id: '1-1',
      label: '商品搜索',
      initComponentConfig: {},
      initPageConfig: {},
      name: 'ShopSearch',
    },
    {
      id: '1-3',
      label: '商品搜索',
      name: 'ShopSearch',
      initComponentConfig: {},
      initPageConfig: {},
    },
    {
      id: '1-2',
      label: '商品',
      name: 'Shop',
      initComponentConfig: {},
      initPageConfig: {},
    },
  ],
});

const currentWidget = ref({});
const setCurrentWidget = current => {
  currentWidget.value = current;
};

const settingBtn = [
  {
    id: 1,
    label: '页面设置',
    actionType: 'pageSetting',
  },
  {
    id: 2,
    label: '组件设置',
    actionType: 'componentSetting',
  },
  {
    id: 3,
    label: '组件管理',
    actionType: 'componentManage',
  },
];
const currentSetting = ref('pageSetting');
const handleSetting = actionType => {
  currentSetting.value = actionType;
};
</script>

<style>
.layout {
  display: flex;
  justify-content: space-between;
}

.layout_slider {
  width: 280px;
  height: 100vh;
  overflow-y: scroll;
  background-color: white;
}

.layout_setting {
  position: relative;
}

.layout_setting--box {
  width: 375px;
  height: 100vh;
  overflow-y: scroll;
  padding: 20px;
  box-sizing: border-box;
  background-color: white;
}

.btn-item {
  background-color: white;
  padding: 8px 14px 8px;
  font-size: 14px;
  margin-bottom: 8px;
  cursor: pointer;
}

.btn-item--active {
  background-color: #155bd4;
  color: white;
}

.layout_setting--btns {
  position: absolute;
  left: -90px;
  top: 50px;
}
</style>
