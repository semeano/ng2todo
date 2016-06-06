import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2todoAppComponent } from '../app/ng2todo.component';

beforeEachProviders(() => [Ng2todoAppComponent]);

describe('App: Ng2todo', () => {
  it('should create the app',
      inject([Ng2todoAppComponent], (app: Ng2todoAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2todo works!\'',
      inject([Ng2todoAppComponent], (app: Ng2todoAppComponent) => {
    expect(app.title).toEqual('ng2todo works!');
  }));
});
