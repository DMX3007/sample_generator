module.exports = function(plop) {
  // New generator for chart component
  plop.setGenerator('chart-component', {
    description: 'Create a new chart component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'What is the name of the chart component?',
    },
    {
      type: 'list',
      name: 'section',
      message: 'Which section do you want to add the chart component to?',
      choices: ['journals'],
    }],
    actions: function(data) {
      const actions = [
        {
          type: 'add',
          path: '../apps/admin-web/public/src/modules/{{section}}/{{name}}.component.js',
          templateFile: './chartComponent.hbs'
        },
      ];
      if (data.section === 'journals') {
        actions.push({
          type: 'add',
          path: '../apps/admin-web/public/src/modules/{{section}}/{{name}}.template.pug',
          templateFile: './chartTemplate.hbs'
        });
        actions.push({
          type: 'append',
          path: '../apps/admin-web/public/src/modules/journals/_module.js',
          pattern: '/* PLOP_INJECT_IMPORT */',
          template: 'import { {{name}} } from \'./{{name}}.component\';'
        });
        actions.push({
          type: 'append',
          path: '../apps/admin-web/public/src/modules/journals/_module.js',
          pattern: '/*PLOP_INJECT_IMPORT*/',
          template: `$1\n\njournalsModule.component('{{name}}', {{name}});`
        });
        actions.push({
          type: 'append',
          path: '../apps/admin-web/public/src/state.config.js',
          pattern: '/* PLOP_INJECT_IMPORT */',
          template: `component: 'main',`
        })
        actions.push({
          type: 'append',
          path: '../apps/admin-web/public/routes/index.js',
          pattern: '/* PLOP_INJECT_IMPORT */',
          templateFile: './chartRouter.hbs'
        })
        actions.push({
          type: 'append',
          path: '../apps/admin-web/public/src/modules/journals/factories/Charts.factory.js',
          pattern: '/* PLOP_INJECT_IMPORT */',
          template: `get{{name}}: {
            url: '/{{name}}',
            method: 'get',
            isArray: false,
          },`
        })
        actions.push({
            type: 'append',
            path: '../apps/admin-web/public/src/modules/journals/main.template.pug',
            pattern: '// PLOP_INJECT_IMPORT',
            template: `div(ng-if="$ctrl.report.$resolved")
            {{name}}(report="$ctrl.report") Hello chart`,
          })
        actions.push({
          type: 'append',
          path: '../apps/admin-web/public/src/modules/journals/main.component.js',
          pattern: '  template: template(),',
          template: `  controller: [
    'Charts',
    function(Charts) {
      this.report = Charts.get{{name}}();
    },
  ],`
        })
      }
      // if (data.section === 'monitor') {
      //   actions.push({
      //     type: 'add',
      //     path: '../apps/admin-web/public/src/modules/{{section}}/{{name}}.template.pug',
      //     templateFile: './chartComponent.hbs'
      //   });
      // }
      // if (data.section === 'report') {
      //   actions.push({
      //     type: 'add',
      //     path: '../apps/admin-web/public/src/modules/{{section}}/{{name}}.template.pug',
      //     templateFile: './chartComponent.hbs'
      //   });
      // }
      return actions; // Ensure the actions array is returned
    },

      // {
      //   type: 'modify',
      //   path: './apps/admin-web/public/src/modules/journals/journalsMergeLog.template.pug',
      //   pattern: /(div\(ng-if="\$ctrl\.report\.\$resolved"\))/g,
      //   template: '$1\n  {{name}}(report="$ctrl.report")'
      // },
      // {
      //   type: 'modify',
      //   path: './apps/admin-web/public/src/modules/journals/journalsIncomingLog.template.pug',
      //   pattern: /(div\(ng-if="\$ctrl\.report\.\$resolved"\))/g,
      //   template: '$1\n  {{name}}(report="$ctrl.report")'
      // },
  });
};
