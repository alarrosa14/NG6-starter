import TeamGapModule from './teamGap'
import TeamGapController from './teamGap.controller';
import TeamGapComponent from './teamGap.component';
import TeamGapTemplate from './teamGap.html';

describe('TeamGap', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TeamGapModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TeamGapController();
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
      expect(TeamGapTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TeamGapComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TeamGapTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TeamGapController);
      });
  });
});
