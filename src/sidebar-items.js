const sidebarItem = (name, route = null, tags = null) => {
  return {
    text: name,
    route: route || `/components=${name}`,
    tags: tags || []
  }
}


const installationItems = [
  sidebarItem('Setup', '/installation=setup', ['setup']),
  sidebarItem('Customize', '/installation=customize', ['customize'])
]

const componentMainItems = [
  sidebarItem('fvMain', null, ['main', 'fv-main', 'fvmain', 'layout']),
  sidebarItem('fvHeader', null, ['header', 'fv-header', 'fvheader', 'layout']),
  sidebarItem('fvContent', null, ['content', 'fv-content', 'fvcontent', 'layout']),
  sidebarItem('fvFooter', null, ['footer', 'fv-footer', 'fvfooter', 'layout']),
  sidebarItem('fvSidebar', null, ['sidebar', 'fv-sidebar', 'fvsidebar', 'layout']),
  sidebarItem('fvList-fvListItem', '/components=fvList-fvListItem', ['list', 'list-item', 'item', 'fvlist', 'fv-list', 'fvlistitem', 'fv-list-item'])
]

const componentDialogItems = [
  sidebarItem('fvDialog', null, ['dialog', 'modal', 'alert', 'message', 'box', 'fv-dialog', 'fvdialog']),
  sidebarItem('fvMenu', null, ['menu', 'sheet', 'fv-menu', 'fvmenu', 'dialog'])
]

const componentFormItems = [
  sidebarItem('fvButton', null, ['button', 'fv-button', 'fvbutton', 'form']),
  sidebarItem('fvInput', null, ['input', 'text-box', 'textbox', 'form', 'fv-input', 'fvinput']),
  sidebarItem('fvTextarea', null, ['input', 'text-box', 'textbox', 'form', 'fv-textarea', 'fvtextarea', 'textarea']),
  sidebarItem('fvSelect', null, ['input', 'select', 'option', 'form', 'dropdown', 'fv-select', 'fvselect']),
  sidebarItem('fvDatepicker', null, ['input', 'date-picker', 'datepicker', 'form', 'fv-datepicker', 'fvdatepicker']),
  sidebarItem('fvSwitch', null, ['switch', 'toggle', 'handle', 'check', 'form', 'fv-switch', 'fvswitch']),
  sidebarItem('fvCheck', null, ['checkbox', 'check-box', 'check', 'radio', 'radiobutton', 'radio-button', 'form', 'fv-check', 'fvcheck']),
  sidebarItem('fvSteps', null, ['steps', 'step', 'form', 'fv-steps', 'fvsteps']),
  sidebarItem('fvRange', null, ['range', 'slider', 'from', 'to', 'form', 'fv-range', 'fvrange']),
  sidebarItem('fvFormElement', null, ['focus', 'label', 'title', 'form', 'element', 'form element', 'fv-form-element', 'fvformElement']),
  sidebarItem('fvForm', null, ['submit', 'form', 'fv-form', 'fvform'])
]

const componentOtherItems = [
  sidebarItem('fvTable', null, ['table', 'list', 'fv-table', 'fvtable']),
  sidebarItem('fvSlider', null, ['slider', 'fv-slider', 'fvslider']),
  sidebarItem('fvImg', null, ['image', 'picture', 'img', 'pic', 'fv-img', 'fvimg']),
  sidebarItem('fvToast', null, ['toast', 'alert', 'msg', 'message', 'fv-toast', 'fvtoast']),
  sidebarItem('fvAvatar', null, ['avatar', 'profile-picture', 'profile', 'display-image', 'fv-avatar', 'fvavatar']),
  sidebarItem('fvLoading', null, ['loading', 'spinner', 'waiting', 'fv-loading', 'fvloading']),
  sidebarItem('fvPagination', null, ['pagination', 'paginate', 'page', 'fv-pagination', 'fvpagination'])
]

const styleItems = [
  sidebarItem('fvGrid', '/styles=fvGrid', ['css', 'style', 'grid', 'row', 'col', 'column', 'fv-row', 'fvrow', 'fv-col', 'fvcol']),
  sidebarItem('fvHelper', '/styles=fvHelper', ['css', 'style', 'helper', 'padding', 'margin'])
]

const search = (text = '') => {
  const ret = []
  text = text.toLowerCase()
  for(let items of [installationItems, componentMainItems, componentDialogItems, componentFormItems, componentOtherItems, styleItems]) {
    for(let item of items) {
      if (item.tags) {
        if (item.tags.join(',').indexOf(text) > -1) {
          ret.push(item)
        }
      }
    }
  }
  return ret
}

export default {
  styleItems,
  componentOtherItems,
  componentFormItems,
  componentDialogItems,
  componentMainItems,
  installationItems,
  search
}