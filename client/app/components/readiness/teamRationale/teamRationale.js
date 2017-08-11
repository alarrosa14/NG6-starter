import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import teamRationaleComponent from './teamRationale.component';

let teamRationaleModule = angular.module('teamRationale', [
  uiRouter
])

.component('teamRationale', teamRationaleComponent)

.name;

export default teamRationaleModule;
