module.exports = [
  {
    name: 'Home',
    path: '/',
    componentName: 'home'
  },
  {
    name: 'Setup',
    path: '/installation/setup',
    componentName: 'setup',
    api: require('./api/setup.json')
  },
  {
    name: 'Customize',
    path: '/installation/customize',
    componentName: 'customize',
    api: require('./api/customize.json')
  },
  {
    name: 'Main',
    path: '/components/main',
    componentName: 'fvMain',
    api: require('./api/fvMain.json')
  },
  {
    name: 'Header',
    path: '/components/header',
    componentName: 'fvHeader',
    api: require('./api/fvHeader.json')
  },
  {
    name: 'Sidebar',
    path: '/components/sidebar',
    componentName: 'fvSidebar',
    api: require('./api/fvSidebar.json')
  },
  {
    name: 'content',
    path: '/components/content',
    componentName: 'fvContent',
    api: require('./api/fvContent.json')
  },
  {
    name: 'footer',
    path: '/components/footer',
    componentName: 'fvFooter',
    api: require('./api/fvFooter.json')
  },
  {
    name: 'dialog',
    path: '/components/dialog',
    componentName: 'fvDialog',
    api: require('./api/fvDialog.json')
  },
  {
    name: 'menu',
    path: '/components/menu',
    componentName: 'fvMenu',
    api: require('./api/fvMenu.json')
  },
  {
    name: 'button',
    path: '/components/button',
    componentName: 'fvButton',
    api: require('./api/fvButton.json')
  },
  {
    name: 'input',
    path: '/components/input',
    componentName: 'fvInput',
    api: require('./api/fvInput.json')
  },
  {
    name: 'avatar',
    path: '/components/avatar',
    componentName: 'fvAvatar',
    api: require('./api/fvAvatar.json')
  },
  {
    name: 'loading',
    path: '/components/loading',
    componentName: 'fvLoading',
    api: require('./api/fvLoading.json')
  },
  {
    name: 'Steps',
    path: '/components/steps',
    componentName: 'fvSteps',
    api: require('./api/fvSteps.json')
  },
  {
    name: 'Textarea',
    path: '/components/textarea',
    componentName: 'fvTextarea',
    api: require('./api/fvTextarea.json')
  },
  {
    name: 'Select',
    path: '/components/select',
    componentName: 'fvSelect',
    api: require('./api/fvSelect.json')
  },
  {
    name: 'datepicker',
    path: '/components/datepicker',
    componentName: 'fvDatepicker',
    api: require('./api/fvDatepicker.json')
  },
  {
    name: 'switch',
    path: '/components/switch',
    componentName: 'fvSwitch',
    api: require('./api/fvSwitch.json')
  },
  {
    name: 'fvRange',
    path: '/components/range',
    componentName: 'fvRange',
    api: require('./api/fvRange.json')
  },
  {
    name: 'fvCheck',
    path: '/components/check',
    componentName: 'fvCheck',
    api: require('./api/fvCheck.json')
  },
  {
    name: 'fvPagination',
    path: '/components/pagination',
    componentName: 'fvPagination',
    api: require('./api/fvPagination.json')
  },
  {
    name: 'fvFormElement',
    path: '/components/form-element',
    componentName: 'fvFormElement',
    api: require('./api/fvFormElement.json')
  },
  {
    name: 'fvForm',
    path: '/components/form',
    componentName: 'fvForm',
    api: require('./api/fvForm.json')
  },
  {
    name: 'fvTable',
    path: '/components/table',
    componentName: 'fvTable',
    api: require('./api/fvTable.json')
  },
  {
    name: 'fvImg',
    path: '/components/img',
    componentName: 'fvImg',
    api: require('./api/fvImg.json')
  },
  {
    name: 'fvSlider',
    path: '/components/slider',
    componentName: 'fvSlider',
    api: require('./api/fvSlider.json')
  },
  {
    name: 'fvList-fvListItem',
    path: '/components/list',
    componentName: 'fvList-fvListItem',
    api: [
      require('./api/fvList.json'),
      require('./api/fvListItem.json')
    ]
  },
  {
    name: 'fvToast',
    path: '/components/toast',
    componentName: 'fvToast',
    api: require('./api/fvToast.json')
  },
  {
    name: 'fvGrid',
    path: '/styles/grid',
    componentName: 'fvGrid',
    api: require('./api/fvGrid.json')
  },
  {
    name: 'fvHelper',
    path: '/styles/helper',
    componentName: 'fvHelper',
    api: require('./api/fvHelper.json')
  }
]
