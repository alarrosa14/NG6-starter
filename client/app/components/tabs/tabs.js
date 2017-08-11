import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import tabsComponent from './tabs.component';
import tabsPaneComponent from './tabsPane.component';

let tabsModule = angular.module('tabs', [
  uiRouter
])

.component('tabs', tabsComponent)

.component('tabsPane', tabsPaneComponent)

.name;

export default tabsModule;
