module.exports = [
  {
    name: 'Home',
    path: '/',
    componentName: 'home',
    priority: 1
  },
  {
    name: 'Setup',
    path: '/installation/setup',
    componentName: 'setup',
    api: require('./api/setup.json'),
    priority: 0.8
  },
  {
    name: 'Customize',
    path: '/installation/customize',
    componentName: 'customize',
    api: require('./api/customize.json'),
    priority: 0.9
  },
  {
    name: 'Main',
    path: '/components/main',
    componentName: 'fvMain',
    api: require('./api/fvMain.json'),
    priority: 0.7
  },
  {
    name: 'Header',
    path: '/components/header',
    componentName: 'fvHeader',
    api: require('./api/fvHeader.json'),
    priority: 0.7
  },
  {
    name: 'Sidebar',
    path: '/components/sidebar',
    componentName: 'fvSidebar',
    api: require('./api/fvSidebar.json'),
    priority: 0.7
  },
  {
    name: 'content',
    path: '/components/content',
    componentName: 'fvContent',
    api: require('./api/fvContent.json'),
    priority: 0.7
  },
  {
    name: 'footer',
    path: '/components/footer',
    componentName: 'fvFooter',
    api: require('./api/fvFooter.json'),
    priority: 0.7
  },
  {
    name: 'dialog',
    path: '/components/dialog',
    componentName: 'fvDialog',
    api: require('./api/fvDialog.json'),
    priority: 0.9
  },
  {
    name: 'menu',
    path: '/components/menu',
    componentName: 'fvMenu',
    api: require('./api/fvMenu.json'),
    priority: 0.9
  },
  {
    name: 'button',
    path: '/components/button',
    componentName: 'fvButton',
    api: require('./api/fvButton.json'),
    priority: 0.8
  },
  {
    name: 'input',
    path: '/components/input',
    componentName: 'fvInput',
    api: require('./api/fvInput.json'),
    priority: 0.8
  },
  {
    name: 'avatar',
    path: '/components/avatar',
    componentName: 'fvAvatar',
    api: require('./api/fvAvatar.json'),
    priority: 0.8
  },
  {
    name: 'loading',
    path: '/components/loading',
    componentName: 'fvLoading',
    api: require('./api/fvLoading.json'),
    priority: 0.8
  },
  {
    name: 'Steps',
    path: '/components/steps',
    componentName: 'fvSteps',
    api: require('./api/fvSteps.json'),
    priority: 0.8
  },
  {
    name: 'Textarea',
    path: '/components/textarea',
    componentName: 'fvTextarea',
    api: require('./api/fvTextarea.json'),
    priority: 0.8
  },
  {
    name: 'Select',
    path: '/components/select',
    componentName: 'fvSelect',
    api: require('./api/fvSelect.json'),
    priority: 1
  },
  {
    name: 'datepicker',
    path: '/components/datepicker',
    componentName: 'fvDatepicker',
    api: require('./api/fvDatepicker.json'),
    priority: 1
  },
  {
    name: 'switch',
    path: '/components/switch',
    componentName: 'fvSwitch',
    api: require('./api/fvSwitch.json'),
    priority: 0.9
  },
  {
    name: 'fvRange',
    path: '/components/range',
    componentName: 'fvRange',
    api: require('./api/fvRange.json'),
    priority: 1
  },
  {
    name: 'fvCheck',
    path: '/components/check',
    componentName: 'fvCheck',
    api: require('./api/fvCheck.json'),
    priority: 0.8
  },
  {
    name: 'fvPagination',
    path: '/components/pagination',
    componentName: 'fvPagination',
    api: require('./api/fvPagination.json'),
    priority: 0.9
  },
  {
    name: 'fvFormElement',
    path: '/components/form-element',
    componentName: 'fvFormElement',
    api: require('./api/fvFormElement.json'),
    priority: 0.8
  },
  {
    name: 'fvForm',
    path: '/components/form',
    componentName: 'fvForm',
    api: require('./api/fvForm.json'),
    priority: 0.8
  },
  {
    name: 'fvTable',
    path: '/components/table',
    componentName: 'fvTable',
    api: require('./api/fvTable.json'),
    priority: 0.9
  },
  {
    name: 'fvImg',
    path: '/components/img',
    componentName: 'fvImg',
    api: require('./api/fvImg.json'),
    priority: 0.9
  },
  {
    name: 'fvSlider',
    path: '/components/slider',
    componentName: 'fvSlider',
    api: require('./api/fvSlider.json'),
    priority: 1
  },
  {
    name: 'fvList-fvListItem',
    path: '/components/list',
    componentName: 'fvList-fvListItem',
    api: [
      require('./api/fvList.json'),
      require('./api/fvListItem.json')
    ],
    priority: 0.9
  },
  {
    name: 'fvToast',
    path: '/components/toast',
    componentName: 'fvToast',
    api: require('./api/fvToast.json'),
    priority: 0.8
  },
  {
    name: 'fvGrid',
    path: '/styles/grid',
    componentName: 'fvGrid',
    api: require('./api/fvGrid.json'),
    priority: 0.8
  },
  {
    name: 'fvHelper',
    path: '/styles/helper',
    componentName: 'fvHelper',
    api: require('./api/fvHelper.json'),
    priority: 0.8
  }
]
