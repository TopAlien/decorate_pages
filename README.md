```js

{
  id: '2',
  /** 
   * 分组名称
   */
  label: '业务组件',
  children: [
    {
      /** 命名规则：pid-id */
      id: '2-1',
      /** 装修组件名称 */
      label: '商品',
      /** 组件Icon */
      icon: '商品ICON',
      /** 渲染这个组件的名称，规则-例: widget/Shop/index.vue会自动导入文件，使用Shop做为组件组册名 */
      name: 'Shop',
      /** 组件设置 初始化配置 */
      initComponentConfig: {},
    }
  ]
}

```

## 必读说明 [注意命名规范， 例：组件名+ComponentSetting ｜ 组件名+Setting ...]

# 1、页面设置可能会通用，所以文件夹位置在setting/pageSetting/[文件名称]下按照文件名称自动导入，使用时 component: '文件名称' 即可。
# 2、组件设置文件跟随可拖动组件引入，固定位置 widget/[组件名称]/componentSetting/[文件名], 自动导入， 使用时 component: '文件名称' 即可。