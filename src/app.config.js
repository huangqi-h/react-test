export default {
  pages: [
    'pages/context/index',
    'pages/high-level-function/index'
  ],
  tabBar: {
    "backgroundColor": "#fff",
    "color": "#98F5FF",
    "selectedColor": "#00F5FF",
    "list": [
      {
        "pagePath": "pages/context/index",
        "text": "context",
      }, 
      {
        "pagePath": "pages/high-level-function/index",
        "text": "高阶组件"
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
