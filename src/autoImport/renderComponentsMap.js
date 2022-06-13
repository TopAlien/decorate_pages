/**
 * 自动导入widget下第一层级的视图组件
 */
const files = import.meta.globEager('../widget/*/index.vue')
const renderComponentsMap = {}
for (const key in files) {
  renderComponentsMap[key.replace(/(\..\/widget\/|\/index.vue)/g, '')] = files[key].default
}

export default renderComponentsMap
