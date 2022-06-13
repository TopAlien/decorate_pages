<template>
  <div class="container">
    <HeaderHandle />
    <div class="layout">
      <div class="layout_panel">
        <Panel :panel="decoratePage.panel" />
      </div>
      <div class="layout_render">
        <Render :widgets="decoratePage.widgets" :pageConfig="pageConfig.config" @setCurrentWidget="setCurrentWidget" :panel="decoratePage.panel" />
      </div>

      <div class="setting--btns">
        <a-space direction="vertical" size="medium">
          <div v-for="item in settingBtn" :key="item.id">
            <a-button
              :type="currentSetting === item.actionType ? 'primary' : 'secondary'"
              @click="handleSetting(item.actionType)"
            >
              <template #icon>
                <icon-settings v-if="item.actionType === 'pageSetting'" />
                <icon-layers v-else />
              </template>
              {{ item.label }}
            </a-button>
          </div>
        </a-space>
      </div>

      <div class="layout_setting">
        <div class="layout_setting--box">
          <div v-if="currentSetting === 'pageSetting'">
            <Header title="页面设置" />
            <component :is="pageSettingMap[pageConfig.component]" :config="pageConfig.config" />
          </div>
          <div v-if="currentSetting === 'componentManage'">
            <Header title="组件管理" />
            <ComponentManage :widgets="decoratePage.widgets" :panel="decoratePage.panel" />
          </div>

          <div v-if="currentSetting === 'componentSetting'">
            <Header title="组件设置" />
            <component
              :is="componentSettingMap[currentWidget.useComponentName || 'defaultSetting']"
              :config="currentWidget.componentConfig"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import pageSettingMap from '../autoImport/pageSettingMap.js';
import componentSettingMap from '../autoImport/componentSettingMap.js';
import Header from './setting/components/Header.vue';
import { usePageConfig } from './useSetting.js';
import { panel } from './panel/setting.js';

import emitter from '../mitt.js'

import HeaderHandle from './handle/index.vue';
import Panel from './panel/index.vue';
import Render from './render/index.vue';
import ComponentManage from './setting/componentManage.vue';

const { pageConfig } = usePageConfig();

const decoratePage = reactive({
  widgets: [],
  panel
});

const currentWidget = ref({});
const setCurrentWidget = (current, index) => {
  /** index -1 为顶部标题组件 */
  if (index === -1) {
    handleSetting('pageSetting');
  } else {
    handleSetting('componentSetting');
    currentWidget.value = current;
  }
};

emitter.on('deleteSetCurrentWidget', () => {
  setCurrentWidget({}, -1)
})

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
];
const currentSetting = ref('pageSetting');
const handleSetting = actionType => {
  currentSetting.value = actionType;
};
</script>

<style>
.layout {
  position: relative;
  display: flex;
}

.layout_panel {
  width: 280px;
  height: calc(100vh - 55px);
  overflow-y: scroll;
  background-color: white;
}

.layout_render{ 
  position: relative;
  flex: 1;
  height: 100vh;
  overflow-y: auto;
}

.layout_setting--box {
  width: 375px;
  height: calc(100vh - 55px);
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

.setting--btns {
  position: absolute;
  right: 385px;
  top: 50px;
}
</style>
