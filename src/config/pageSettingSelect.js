/**
 * 组合页面设置配置
 * config: 页面配置
 * component: setting/pageSetting下的文件名
 * @returns config[页面设置配置], component[页面设置选择的配置页面]
 */
export const pageConfigSelect = type => {
  const pageConfigMap = new Map()
  const defaultSet = {
    config: { title: 'ealien', name: 'default', age: null, gender: '' },
    component: 'defaultSetting'
  }
  pageConfigMap.set('default', defaultSet)

  return pageConfigMap.get(type || 'default')
}
