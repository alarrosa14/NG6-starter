import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import timelineComponent from './timeline.component';

let timelineModule = angular.module('timeline', [
  uiRouter
])

.component('timeline', timelineComponent)

.name;

export default timelineModule;
