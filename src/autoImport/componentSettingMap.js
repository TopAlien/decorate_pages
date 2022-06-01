/**
 * 自动导入组件设置页面
 */
import defaultSetting from '../layout/setting/componentSetting/defaultSetting.vue'

 const files = import.meta.globEager('../widget/*/componentSetting/*.vue');
 const componentSettingMap = {
  defaultSetting
 };
 for (const key in files) {
  componentSettingMap[key.split('componentSetting')[1]?.replace(/(\/|\.vue)/g, '')] = files[key].default;
 }
 
 export default componentSettingMap;