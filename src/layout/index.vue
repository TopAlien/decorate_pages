<template>
  <div class="layout">
    <div class="layout_slider">
      <Slider />
    </div>
    <Render :widgets="decoratePage.widgets" :pageConfig="pageConfig.config" @setCurrentWidget="setCurrentWidget" />
    <div class="layout_setting">
      <div class="layout_setting--btns">
        <a-space direction="vertical" size="medium">
          <div v-for="item in settingBtn" :key="item.id">
            <a-button
              v-if="item.actionType === 'componentSetting' ? showComponentSetting : true"
              :type="currentSetting === item.actionType ? 'primary' : 'outline'"
              @click="handleSetting(item.actionType)"
            >
              <template #icon>
                <icon-settings />
              </template>
              {{ item.label }}
            </a-button>
          </div>
        </a-space>
      </div>

      <div class="layout_setting--box">
        <div v-show="currentSetting === 'pageSetting'">
          <Header title="页面设置" />
          <component :is="pageSettingMap[pageConfig.component]" :config="pageConfig.config" />
        </div>

        <div v-show="currentSetting === 'componentSetting'">
          <Header title="组件设置" />
          <component
            :is="componentSettingMap[currentWidget.useComponentName || 'defaultSetting']"
            :config="currentWidget.componentConfig"
          />
        </div>

        <div v-show="currentSetting === 'componentManage'">
          <Header title="组件管理" />
          <ComponentManage :widgets="decoratePage.widgets" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue';
import { IconSettings } from '@arco-design/web-vue/es/icon';
import pageSettingMap from '../autoImport/pageSettingMap.js';
import componentSettingMap from '../autoImport/componentSettingMap.js';
import Header from './setting/components/Header.vue';
import { usePageConfig } from './useSetting.js';

import Slider from './slider/index.vue';
import Render from './render/index.vue';
import ComponentManage from './setting/componentManage.vue';

const { pageConfig } = usePageConfig();

const decoratePage = reactive({
  widgets: [],
});

const currentWidget = ref({});
const showComponentSetting = ref(false);
const setCurrentWidget = (current, index) => {
  /** index -1 为顶部标题组件 */
  showComponentSetting.value = false;
  if (index === -1) {
    handleSetting('pageSetting');
  } else {
    handleSetting('componentSetting');
    showComponentSetting.value = true;
    currentWidget.value = current;
  }
};

const settingBtn = [
  {
    id: 1,
    label: '页面设置',
    actionType: 'pageSetting',
  },
  {
    id: 2,
    label: '组件管理',
    actionType: 'componentManage',
  },
  {
    id: 3,
    label: '组件设置',
    actionType: 'componentSetting',
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
  left: -124px;
  top: 50px;
}
</style>
