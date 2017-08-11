import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import 'snap.js/dist/snap';
import 'angular-snap/angular-snap';
import 'angular-snap/angular-snap.css';

import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

import 'normalize.css';

angular.module('app', [
    uiRouter,

    Common,
    Components,

    'snap'
  ])

  .config(($locationProvider, snapRemoteProvider) => {
    "ngInject";

    $locationProvider.html5Mode(true).hashPrefix('!');

    snapRemoteProvider.globalOptions.disable = 'right';
  })

  .component('app', AppComponent);
