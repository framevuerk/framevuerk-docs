const sidebarItem = (name, route = null, tags = null) => {
  return {
    text: name,
    route: route || `/components/${name}`,
    tags: tags || []
  }
}


const installationItems = [
  sidebarItem('Setup', '/installation/setup', ['setup']),
  sidebarItem('Customize', '/installation/customize', ['customize'])
]

const componentLayoutItems = [
  sidebarItem('Main', '/components/main', ['main', 'fv-main', 'fvmain', 'layout']),
  sidebarItem('Header', '/components/header', ['header', 'fv-header', 'fvheader', 'layout']),
  sidebarItem('Content', '/components/content', ['content', 'fv-content', 'fvcontent', 'layout']),
  sidebarItem('Footer', '/components/footer', ['footer', 'fv-footer', 'fvfooter', 'layout']),
  sidebarItem('Sidebar', '/components/sidebar', ['sidebar', 'fv-sidebar', 'fvsidebar', 'layout'])
]

const componentDialogItems = [
  sidebarItem('Dialog', '/components/dialog', ['dialog', 'modal', 'alert', 'message', 'box', 'fv-dialog', 'fvdialog']),
  sidebarItem('Menu', '/components/menu', ['menu', 'sheet', 'fv-menu', 'fvmenu', 'dialog'])
]

const componentFormItems = [
  sidebarItem('Button', '/components/button', ['button', 'fv-button', 'fvbutton', 'form']),
  sidebarItem('Input', '/components/input', ['input', 'text-box', 'textbox', 'form', 'fv-input', 'fvinput']),
  sidebarItem('Textarea', '/components/textarea', ['input', 'text-box', 'textbox', 'form', 'fv-textarea', 'fvtextarea', 'textarea']),
  sidebarItem('Select', '/components/select', ['input', 'select', 'option', 'form', 'dropdown', 'fv-select', 'fvselect']),
  sidebarItem('Datepicker', '/components/datepicker', ['input', 'date-picker', 'datepicker', 'form', 'fv-datepicker', 'fvdatepicker']),
  sidebarItem('Switch', '/components/switch', ['switch', 'toggle', 'handle', 'check', 'form', 'fv-switch', 'fvswitch']),
  sidebarItem('Check', '/components/check', ['checkbox', 'check-box', 'check', 'radio', 'radiobutton', 'radio-button', 'form', 'fv-check', 'fvcheck']),
  sidebarItem('Steps', '/components/steps', ['steps', 'step', 'form', 'fv-steps', 'fvsteps']),
  sidebarItem('Range', '/components/range', ['range', 'slider', 'from', 'to', 'form', 'fv-range', 'fvrange']),
  sidebarItem('FormElement', '/components/form-element', ['focus', 'label', 'title', 'form', 'element', 'form element', 'fv-form-element', 'fvformElement']),
  sidebarItem('Form', '/components/form', ['submit', 'form', 'fv-form', 'fvform'])
]

const componentOtherItems = [
  sidebarItem('Table', '/components/table', ['table', 'list', 'fv-table', 'fvtable']),
  sidebarItem('List - ListItem', '/components/list', ['list', 'list-item', 'item', 'fvlist', 'fv-list', 'fvlistitem', 'fv-list-item']),
  sidebarItem('Slider', '/components/slider', ['slider', 'fv-slider', 'fvslider']),
  sidebarItem('Img', '/components/img', ['image', 'picture', 'img', 'pic', 'fv-img', 'fvimg']),
  sidebarItem('Toast', '/components/toast', ['toast', 'alert', 'msg', 'message', 'fv-toast', 'fvtoast']),
  sidebarItem('Avatar', '/components/avatar', ['avatar', 'profile-picture', 'profile', 'display-image', 'fv-avatar', 'fvavatar']),
  sidebarItem('Loading', '/components/loading', ['loading', 'spinner', 'waiting', 'fv-loading', 'fvloading']),
  sidebarItem('Pagination', '/components/pagination', ['pagination', 'paginate', 'page', 'fv-pagination', 'fvpagination'])
]

const styleItems = [
  sidebarItem('Grid', '/styles/grid', ['css', 'style', 'grid', 'row', 'col', 'column', 'fv-row', 'fvrow', 'fv-col', 'fvcol']),
  sidebarItem('Helper', '/styles/helper', ['css', 'style', 'helper', 'padding', 'margin'])
]

const search = (text = '') => {
  const ret = []
  text = text.toLowerCase()
  for(let items of [installationItems, componentLayoutItems, componentDialogItems, componentFormItems, componentOtherItems, styleItems]) {
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
  componentLayoutItems,
  installationItems,
  search
}