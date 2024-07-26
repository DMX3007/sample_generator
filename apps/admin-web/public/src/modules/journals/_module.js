/* PLOP_INJECT_IMPORT */
import { main } from './main.component';
import { Charts } from './factories/Charts.factory';
export const journalsModule = angular.module('journals', [])
.factory('Charts', Charts)

journalsModule.component('main', main);
