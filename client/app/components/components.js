import angular from 'angular';

import ReadinessModule from './readiness/readiness';

let componentModule = angular.module('app.components', [
  ReadinessModule
])

.name;

export default componentModule;
