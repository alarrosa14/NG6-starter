import angular from 'angular';
import UserService from './user.factory';

let userModule = angular.module('user', [])

.factory('User', UserService)

.name;

export default userModule;
