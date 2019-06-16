import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageComponent } from './manage.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Step1Component } from './page1/step1/step1.component';
import { Step2Component } from './page1/step2/step2.component';
import { Step3Component } from './page1/step3/step3.component';

const routes: Routes = [
  {
    path: '',
    component: ManageComponent,
    children: [
      {
        path: 'page1',
        component: Page1Component,
        children: [
          {
            path: '',  redirectTo: 'step1', pathMatch: 'full'
          },
          {
            path: 'step1',
            component: Step1Component
          },
          {
            path: 'step2',
            component: Step2Component
          },
          {
            path: 'step3',
            component: Step3Component
          }
        ]
      },
      {
        path: 'page2',
        component: Page2Component,
      },
      {
        path: 'page3',
        component: Page3Component,
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
