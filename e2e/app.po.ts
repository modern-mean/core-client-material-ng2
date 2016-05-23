export class ModernMeanCoreClientMaterialNg2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('modern-mean-core-client-material-ng2-app h1')).getText();
  }
}
