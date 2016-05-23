import { ModernMeanCoreClientMaterialNg2Page } from './app.po';

describe('modern-mean-core-client-material-ng2 App', function() {
  let page: ModernMeanCoreClientMaterialNg2Page;

  beforeEach(() => {
    page = new ModernMeanCoreClientMaterialNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('modern-mean-core-client-material-ng2 works!');
  });
});
