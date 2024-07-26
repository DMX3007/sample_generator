import stateConfig from './state.config';

import {coreModule} from './core/_module';
import {journalsModule} from './modules/journals/_module';
import {reportsModule} from './modules/reports/_module';
import {linksModule} from './modules/links/_module';
import {monitorModule} from './modules/monitor/_module';

angular
    .module('amo_double_contacts', [
      'ui.router',
      'ngResource',
      'ui.bootstrap',
      'ngSanitize',
      coreModule.name,
      journalsModule.name,
      reportsModule.name,
      linksModule.name,
      monitorModule.name,
    ])
    .config(stateConfig);
