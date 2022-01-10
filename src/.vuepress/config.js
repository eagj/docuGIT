module.exports = {
  dest: 'docs',
  base: '/docuGIT/', 
  title: 'Guia sobre GIT',  
  description: 'Guia sobre GIT y GIThub',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    editLinks: false,
    lastUpdated: false,
    nav: [
      
    ],
    sidebar: [      
      '/creacion-repositorio.md',
      '/ramas-branches.md',
      '/Github.md',
      '/comandos-basicos.md',
      
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
