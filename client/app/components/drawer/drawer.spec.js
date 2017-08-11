import DrawerModule from './drawer'
import DrawerController from './drawer.controller';
import DrawerComponent from './drawer.component';
import DrawerTemplate from './drawer.html';

describe('Drawer', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DrawerModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DrawerController();
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
      expect(DrawerTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = DrawerComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(DrawerTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(DrawerController);
      });
  });
});
