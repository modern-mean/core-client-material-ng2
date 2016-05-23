import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ModernMeanCoreClientMaterialNg2AppComponent } from '../app/modern-mean-core-client-material-ng2.component';

beforeEachProviders(() => [ModernMeanCoreClientMaterialNg2AppComponent]);

describe('App: ModernMeanCoreClientMaterialNg2', () => {
  it('should create the app',
      inject([ModernMeanCoreClientMaterialNg2AppComponent], (app: ModernMeanCoreClientMaterialNg2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'modern-mean-core-client-material-ng2 works!\'',
      inject([ModernMeanCoreClientMaterialNg2AppComponent], (app: ModernMeanCoreClientMaterialNg2AppComponent) => {
    expect(app.title).toEqual('modern-mean-core-client-material-ng2 works!');
  }));
});
