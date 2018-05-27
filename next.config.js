const topLevelPaths = {
  '/': { page: '/' },
  '/getting-started': { page: '/getting-started' },
};

const componentDemoPaths = {
  '/docs/bottomsheets': { page: '/docs/components/bottomsheets' },
  '/docs/buttons': { page: '/docs/components/buttons' },
  '/docs/cards': { page: '/docs/components/cards' },
  '/docs/checkboxes': { page: '/docs/components/checkboxes' },
  '/docs/chips': { page: '/docs/components/chips' },
  '/docs/dialog': { page: '/docs/components/dialog' },
  '/docs/divider': { page: '/docs/components/divider' },
  '/docs/drawer': { page: '/docs/components/drawer' },
  '/docs/flex-grid': { page: '/docs/components/flex-grid' },
  '/docs/gridlists': { page: '/docs/components/gridlists' },
  '/docs/icons': { page: '/docs/components/icons' },
  '/docs/lists': { page: '/docs/components/lists' },
  '/docs/menus': { page: '/docs/components/menus' },
  '/docs/sliders': { page: '/docs/components/sliders' },
  '/docs/snackbar': { page: '/docs/components/snackbar' },
  '/docs/switches': { page: '/docs/components/switches' },
  '/docs/tables': { page: '/docs/components/tables' },
  '/docs/tabs': { page: '/docs/components/tabs' },
  '/docs/text-fields': { page: '/docs/components/text-fields' },
  '/docs/toolbar': { page: '/docs/components/toolbar' },
  '/docs/toolbar/fixed': { page: '/docs/components/toolbar/fixed' },
  '/docs/toolbar/normal': { page: '/docs/components/toolbar/normal' },
};

module.exports = {
  exportPathMap() {
    return Object.assign(topLevelPaths, componentDemoPaths);
  },
};
