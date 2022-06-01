import shopSearchIcon from '../../assets/panel/shop_search.png';
import shopIcon from '../../assets/panel/goods.png';

export const panel = [
  {
    id: '1',
    label: '基础组件',
    children: [
      {
        id: '1-1',
        label: '商品搜索',
        icon: shopSearchIcon,
        name: 'ShopSearch',
        componentConfig: {},
        useComponentName: 'shopSearchSetting',
      }
    ],
  },
  {
    id: '2',
    label: '业务组件',
    children: [
      {
        id: '2-1',
        label: '商品',
        icon: shopIcon,
        name: 'Shop',
        componentConfig: {},
        useComponentName: '',
      },
    ],
  },
];
