import template from './tabs.html';
import controller from './tabs.controller';
import './tabs.scss';

let tabsComponent = {
  restrict: 'E',
  transclude: true,
  bindings: {},
  template,
  controller
};

export default tabsComponent;
