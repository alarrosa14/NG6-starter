import controller from './tabsPane.controller';
import template from './tabsPane.html';

let tabsPaneComponent = {
  controller,
  template,
  transclude: true,
  require: {
    tabs: '^tabs'
  },
  bindings: {
    title: '@',
    state: '@'
  }
};

export default tabsPaneComponent;
