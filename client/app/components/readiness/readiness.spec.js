import ReadinessModule from './readiness'
import ReadinessController from './readiness.controller';
import ReadinessComponent from './readiness.component';
import ReadinessTemplate from './readiness.html';

describe('Readiness', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ReadinessModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ReadinessController();
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
      expect(ReadinessTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ReadinessComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ReadinessTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ReadinessController);
      });
  });
});
