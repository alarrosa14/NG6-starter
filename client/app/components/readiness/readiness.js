import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import readinessComponent from './readiness.component';

import header from '../header/header';
import drawer from '../drawer/drawer';

import readinessFindings from './readinessFindings/readinessFindings';
import teamProgress from './teamProgress/teamProgress';
import teamGap from './teamGap/teamGap';
import teamRationale from './teamRationale/teamRationale';
import teamActions from './teamActions/teamActions';

let readinessModule = angular.module('readiness', [
  uiRouter,

  header,
  drawer,
  readinessFindings
])

.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('readiness', {
      url: '/readiness',
      resolve: {
        currentUser() {
          return {}
        },
        title() {
          return 'Readiness'
        }
      },
      views: {
        'header@': header,
        'drawer@': drawer
      }
    })

    .state('readiness.findings', {
      url: '/findings',
      views: {
        'body@': readinessFindings
      }
    })

    .state('readiness.findings.team-progress', {
      url: '/team-progress',
      views: {
        'team-progress@readiness.findings': teamProgress
      }
    })

    .state('readiness.findings.team-gap', {
      url: '/team-gap',
      views: {
        'team-gap@readiness.findings': teamGap
      }
    })

    .state('readiness.findings.team-rationale', {
      url: '/team-rationale',
      views: {
        'team-rationale@readiness.findings': teamRationale
      }
    })

    .state('readiness.findings.team-actions', {
      url: '/team-actions',
      views: {
        'team-actions@readiness.findings': teamActions
      }
    })
})

.component('readiness', readinessComponent)

.name;

export default readinessModule;
