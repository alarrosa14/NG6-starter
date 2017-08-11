import template from './header.html';
import controller from './header.controller';
import './header.scss';

let headerComponent = {
  restrict: 'E',
  bindings: {
    title: '<',
    currentUser: '<'
  },
  template,
  controller
};

export default headerComponent;
