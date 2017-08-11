import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import teamActionsComponent from './teamActions.component';

let teamActionsModule = angular.module('teamActions', [
  uiRouter
])

.component('teamActions', teamActionsComponent)

.name;

export default teamActionsModule;
