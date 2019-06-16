import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Step1Component } from './page1/step1/step1.component';
import { Step2Component } from './page1/step2/step2.component';
import { Step3Component } from './page1/step3/step3.component';


import { NgZorroAntdModule } from 'ng-zorro-antd';
@NgModule({
  declarations: [ManageComponent, Page1Component, Page2Component, Page3Component, Step1Component, Step2Component, Step3Component],
  imports: [
    CommonModule,
    ManageRoutingModule,
    NgZorroAntdModule,
  ]
})
export class ManageModule { }
