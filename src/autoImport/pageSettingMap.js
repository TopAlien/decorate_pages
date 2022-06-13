/**
 * 自动导入页面设置页面
 */
const files = import.meta.globEager('../layout/setting/pageSetting/*.vue')
const pageSettingMap = {}
for (const key in files) {
  pageSettingMap[key.replace(/(\..\/layout\/setting\/pageSetting\/|\.vue)/g, '')] = files[key].default
}

export default pageSettingMap
