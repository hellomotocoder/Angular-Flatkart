import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestingComponent } from './testing/testing.component';

@NgModule({
  declarations: [TestingComponent],
  imports: [CommonModule, TestRoutingModule],
})
export class TestModule {
  constructor() {
    console.warn('TestModule con Loaded');
  }
}
