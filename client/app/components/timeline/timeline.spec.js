import TimelineModule from './timeline'
import TimelineController from './timeline.controller';
import TimelineComponent from './timeline.component';
import TimelineTemplate from './timeline.html';

describe('Timeline', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TimelineModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TimelineController();
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
      expect(TimelineTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TimelineComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TimelineTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TimelineController);
      });
  });
});
