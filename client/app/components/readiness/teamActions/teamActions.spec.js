import TeamActionsModule from './teamActions'
import TeamActionsController from './teamActions.controller';
import TeamActionsComponent from './teamActions.component';
import TeamActionsTemplate from './teamActions.html';

describe('TeamActions', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TeamActionsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TeamActionsController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(TeamActionsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TeamActionsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TeamActionsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TeamActionsController);
      });
  });
});
