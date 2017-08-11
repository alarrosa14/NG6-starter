class TabsController {
  constructor($state) {
    'ngInject';

    this.name = 'tabs';
    this.panes = [];

    this.select = (pane) => {
      this.panes.forEach((paneIter) => {
        paneIter.selected = false;
      });
      pane.selected = true;
    };

    this.addPane = function(pane) {
      if ($state.is(pane.state)) {
        this.select(pane);
      }
      this.panes.push(pane);
    };
  }
}

export default TabsController;
