/* PLOP_INJECT_IMPORT */
import { main } from './main.component';
import { Charts } from './factories/Charts.factory';

export const journalsModule = angular.module('journals', [])
journalsModule.factory('Charts', Charts);
/*PLOP_INJECT_IMPORT*/
journalsModule.component('main', main);
