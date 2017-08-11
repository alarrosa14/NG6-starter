import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import teamGapComponent from './teamGap.component';

let teamGapModule = angular.module('teamGap', [
  uiRouter
])

.component('teamGap', teamGapComponent)

.name;

export default teamGapModule;
