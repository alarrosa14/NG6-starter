import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import drawerComponent from './drawer.component';

let drawerModule = angular.module('drawer', [
  uiRouter
])

.component('drawer', drawerComponent)

.name;

export default drawerModule;
