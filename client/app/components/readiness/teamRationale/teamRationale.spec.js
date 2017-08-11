import TeamRationaleModule from './teamRationale'
import TeamRationaleController from './teamRationale.controller';
import TeamRationaleComponent from './teamRationale.component';
import TeamRationaleTemplate from './teamRationale.html';

describe('TeamRationale', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TeamRationaleModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TeamRationaleController();
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
      expect(TeamRationaleTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TeamRationaleComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TeamRationaleTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TeamRationaleController);
      });
  });
});
