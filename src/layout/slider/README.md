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
      component: {
        /** 渲染这个组件的名称，与。。。文件下文件名对应, 命名规则：xxxComponent */
        name: 'ShopComponent',
        /** 页面设置：选取的配置，默认defaultPageConfig, 命名规则: xxxPageConfig */
        usePageConfigName: 'defaultPageConfig',
        /** 组件设置 */
        useComponentConfig: {
          /** 页面设置：选取的配置，默认defaultComponentConfig, 命名规则： xxxComponentConfig */
          name: 'defaultComponentConfig',
          /** 组件设置 初始化配置 */
          initConfig: {},
        },
      }
    }
  ]
}

```