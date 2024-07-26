const config = [
  '$urlRouterProvider',
  '$stateProvider',
  function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/journals');
    $stateProvider
        .state({
          name: 'links',
          url: '/links',
          // component: 'links',
        })
        .state({
          name: 'journals',
          url: '/journals',
          /* PLOP_INJECT_IMPORT */
        })
        .state({
          name: 'reports',
          url: '/reports',
          // component: 'reportsMain',
        })
        .state({
          name: 'monitor',
          url: '/monitor',
          // component: 'monitor',
        });
  },
];

export default config;
