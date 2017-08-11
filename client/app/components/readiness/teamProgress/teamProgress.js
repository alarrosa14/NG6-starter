import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import teamProgressComponent from './teamProgress.component';

let teamProgressModule = angular.module('teamProgress', [
  uiRouter
])

.component('teamProgress', teamProgressComponent)

.name;

export default teamProgressModule;
