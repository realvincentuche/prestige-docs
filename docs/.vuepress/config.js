module.exports = {
  title: 'Prestigé School Documentation',
  description:
    'Prestigé School is a fully automated school that offers students, teachers, guardians and school administrators all the tools needed to fully carried out school activities online, thereby creating an unparalleled experience in the school learning process crucial to the intellectual development of students in our society today.',
  themeConfig: {
    logo: '/images/logo.png',
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Get Started',
        link: '/guide/',
      },
      {
        text: 'Portal Demo',
        link: 'http://school.skulite.com/',
      },
    ],
    sidebar: [
      {
        title: 'Get Started',
        collapsable: false,
        children: [
          '/guide/',
          '/guide/pages',
          '/guide/structure',
          '/guide/deployment',
        ],
      },
      {
        title: 'School Admin Account',
        collapsable: false,
        children: [
          '/admin/',
          '/admin/school-management',
          '/admin/operation-management',
          '/admin/portal-management',
          '/admin/learning-management',
        ],
      },
      {
        title: 'School Teacher Account',
        collapsable: false,
        children: [
          '/teacher/',
          '/teacher/class-teacher',
          '/teacher/subject-teacher',
          '/teacher/portal-management',
        ],
      },
      {
        title: 'School Reporter Account',
        collapsable: false,
        children: [
          '/reporter/',
          '/reporter/news-management',
          '/reporter/portal-management',
        ],
      },
      {
        title: 'Prospective Student Account',
        collapsable: false,
        children: [
          '/prospective-student/',
          '/prospective-student/application-management',
          '/prospective-student/payment-management',
          '/prospective-student/portal-management',
        ],
      },
      {
        title: 'Student Account',
        collapsable: false,
        children: [
          '/student/',
          '/student/biodata-management',
          '/student/subjects-management',
          '/student/study-management',
          '/student/exercises-management',
          '/student/payments-management',
          '/student/portal-management',
        ],
      },
      {
        title: 'Parent / Guardian Account',
        collapsable: false,
        children: [
          '/parent/',
          '/parent/wards-management',
          '/parent/portal-management',
        ],
      },
      {
        title: 'Support',
        collapsable: false,
        children: ['/support/'],
      },
    ],
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    searchPlaceholder: 'Search...',
  },
  head: [
    ['link', { rel: 'icon', href: '/images/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    [
      'meta',
      { name: 'application-name', content: 'Prestigé School Documentation' },
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-title',
        content: 'Prestigé School Documentation',
      },
    ],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    ['link', { rel: 'apple-touch-icon', href: '/images/logo.png' }],
    ['link', { rel: 'mask-icon', href: '/images/logo.png', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/images/logo.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
  ],
  plugins: [
    ['@vuepress/active-header-links'],
    ['@vuepress/back-to-top'],
    ['@vuepress/last-updated'],
    ['@vuepress/medium-zoom'],
    ['@vuepress/nprogress'],
    [
      '@vuepress/search',
      {
        searchMaxSuggestions: 10,
      },
    ],
    ['vuepress-plugin-smooth-scroll'],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
  ],
}
