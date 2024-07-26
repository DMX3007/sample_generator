import {dataTableLanguage} from './dataTableLanguage.constant';
import {dateTimeRangePicker} from './dateTimeRangePicker.directive';
import {Notification} from './Notification.factory';
import {chart} from './chart.directive';

export const coreModule = angular.module('core', [])
    .constant('dataTableLanguage', dataTableLanguage)
    .factory('Notification', Notification)
    .directive('dateTimeRangePicker', dateTimeRangePicker)
    .directive('chart', chart)
