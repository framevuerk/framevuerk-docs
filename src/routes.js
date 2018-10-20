module.exports = [
  {
    name: 'Home',
    path: '/',
    componentName: 'home'
  },
  {
    name: 'Setup',
    path: '/installation=setup',
    componentName: 'setup',
    api: require('./api/setup.json')
  },
  {
    name: 'Customize',
    path: '/installation=customize',
    componentName: 'customize',
    api: require('./api/customize.json')
  },
  {
    name: 'fvMain',
    path: '/components=fvMain',
    componentName: 'fvMain',
    api: require('./api/fvMain.json')
  },
  {
    name: 'fvHeader',
    path: '/components=fvHeader',
    componentName: 'fvHeader',
    api: require('./api/fvHeader.json')
  },
  {
    name: 'fvSidebar',
    path: '/components=fvSidebar',
    componentName: 'fvSidebar',
    api: require('./api/fvSidebar.json')
  },
  {
    name: 'fvContent',
    path: '/components=fvContent',
    componentName: 'fvContent',
    api: require('./api/fvContent.json')
  },
  {
    name: 'fvFooter',
    path: '/components=fvFooter',
    componentName: 'fvFooter',
    api: require('./api/fvFooter.json')
  },
  {
    name: 'fvDialog',
    path: '/components=fvDialog',
    componentName: 'fvDialog',
    api: require('./api/fvDialog.json')
  },
  {
    name: 'fvMenu',
    path: '/components=fvMenu',
    componentName: 'fvMenu',
    api: require('./api/fvMenu.json')
  },
  {
    name: 'fvButton',
    path: '/components=fvButton',
    componentName: 'fvButton',
    api: require('./api/fvButton.json')
  },
  {
    name: 'fvInput',
    path: '/components=fvInput',
    componentName: 'fvInput',
    api: require('./api/fvInput.json')
  },
  {
    name: 'fvAvatar',
    path: '/components=fvAvatar',
    componentName: 'fvAvatar',
    api: require('./api/fvAvatar.json')
  },
  {
    name: 'fvLoading',
    path: '/components=fvLoading',
    componentName: 'fvLoading',
    api: require('./api/fvLoading.json')
  },
  {
    name: 'fvSteps',
    path: '/components=fvSteps',
    componentName: 'fvSteps',
    api: require('./api/fvSteps.json')
  },
  {
    name: 'fvTextarea',
    path: '/components=fvTextarea',
    componentName: 'fvTextarea',
    api: require('./api/fvTextarea.json')
  },
  {
    name: 'fvSelect',
    path: '/components=fvSelect',
    componentName: 'fvSelect',
    api: require('./api/fvSelect.json')
  },
  {
    name: 'fvDatepicker',
    path: '/components=fvDatepicker',
    componentName: 'fvDatepicker',
    api: require('./api/fvDatepicker.json')
  },
  {
    name: 'fvSwitch',
    path: '/components=fvSwitch',
    componentName: 'fvSwitch',
    api: require('./api/fvSwitch.json')
  },
  {
    name: 'fvRange',
    path: '/components=fvRange',
    componentName: 'fvRange',
    api: require('./api/fvRange.json')
  },
  {
    name: 'fvCheck',
    path: '/components=fvCheck',
    componentName: 'fvCheck',
    api: require('./api/fvCheck.json')
  },
  {
    name: 'fvPagination',
    path: '/components=fvPagination',
    componentName: 'fvPagination',
    api: require('./api/fvPagination.json')
  },
  {
    name: 'fvForm',
    path: '/components=fvForm',
    componentName: 'fvForm',
    api: require('./api/fvForm.json')
  },
  {
    name: 'fvTable',
    path: '/components=fvTable',
    componentName: 'fvTable',
    api: require('./api/fvTable.json')
  },
  {
    name: 'fvImg',
    path: '/components=fvImg',
    componentName: 'fvImg',
    api: require('./api/fvImg.json')
  },
  {
    name: 'fvSlider',
    path: '/components=fvSlider',
    componentName: 'fvSlider',
    api: require('./api/fvSlider.json')
  },
  {
    name: 'fvList-fvListItem',
    path: '/components=fvList-fvListItem',
    componentName: 'fvList-fvListItem',
    api: [
      require('./api/fvList.json'),
      require('./api/fvListItem')
    ]
  },
  {
    name: 'fvToast',
    path: '/components=fvToast',
    componentName: 'fvToast',
    api: require('./api/fvToast.json')
  },
  {
    name: 'fvGrid',
    path: '/styles=fvGrid',
    componentName: 'fvGrid',
    api: require('./api/fvGrid.json')
  }
]
