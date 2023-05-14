import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [{ path: '', component: TestingComponent }];
// { path: 'testing', component: TestingComponent }
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestRoutingModule {
  constructor() {
    console.warn('TestRoutingModule con Loaded');
  }
}
