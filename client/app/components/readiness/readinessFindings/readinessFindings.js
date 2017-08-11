import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import readinessFindingsComponent from './readinessFindings.component';

import tabs from '../../tabs/tabs';
import teamProgress from '../teamProgress/teamProgress';
import teamGap from '../teamGap/teamGap';
import teamRationale from '../teamRationale/teamRationale';
import teamActions from '../teamActions/teamActions';

let readinessFindingsModule = angular.module('readinessFindings', [
  uiRouter,

  tabs,

  teamProgress,
  teamGap,
  teamRationale,
  teamActions
])

.component('readinessFindings', readinessFindingsComponent)

.name;

export default readinessFindingsModule;
