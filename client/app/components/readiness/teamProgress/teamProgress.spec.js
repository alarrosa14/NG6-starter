import TeamProgressModule from './teamProgress'
import TeamProgressController from './teamProgress.controller';
import TeamProgressComponent from './teamProgress.component';
import TeamProgressTemplate from './teamProgress.html';

describe('TeamProgress', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TeamProgressModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TeamProgressController();
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
      expect(TeamProgressTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TeamProgressComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TeamProgressTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TeamProgressController);
      });
  });
});
