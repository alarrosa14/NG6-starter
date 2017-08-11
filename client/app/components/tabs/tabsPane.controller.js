class TabsPaneController {
  constructor() {
    this.name = 'tabsPane';
  }

  $onInit() {
    this.tabs.addPane(this);
  }
}

export default TabsPaneController;
