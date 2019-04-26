// 多頁佈局預設開啟作業
export const tabRouteConfigJson = [
  {
    'id': 'home',
    'canClose': false,
    'defaultOpen': true,
    'canMultiOpen': false,
    'iconClass': 'anticon-home'
  }
   ,{
     'id': 'dw-group',
     'canClose': true,
     'defaultOpen': false,
     'canMultiOpen': true,
     'iconClass': 'anticon-home'
   }
   ,{
    'id': 'dw-order',
    'canClose': true,
    'defaultOpen': true,
    'canMultiOpen': true,
    'iconClass': 'anticon-home'
  },
  {
  'id': 'dw-sys-menu',
  'canClose': true,
  'defaultOpen': true,
  'canMultiOpen': true,
  'iconClass': 'anticon-home'
  }
  // ,{
  //   'id': 'c77ebd14-7594-4581-aac2-60080ed54521', // 鼎新電腦
  //   'canClose': true,
  //   'defaultOpen': true,
  //   'canMultiOpen': false,
  //   'reload': false,
  //   'iconClass': 'anticon-home'
  // },
  // {
  //   'id': 'a6b38ef7-9630-4e29-b8a0-38ed681f6852', // 報表
  //   'canClose': true,
  //   'defaultOpen': true,
  //   'canMultiOpen': false,
  //   'reload': false,
  //   'iconClass': 'anticon-home'
  // }
];
