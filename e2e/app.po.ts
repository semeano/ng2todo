export class Ng2todoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2todo-app h1')).getText();
  }
}
