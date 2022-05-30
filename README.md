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