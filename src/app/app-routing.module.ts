import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { TaskboardComponent } from './tasboard/tasboard.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [{
      path: '',
      component: DashboardComponent
    }, {
      path: 'task',
      component: TaskboardComponent
    },

  ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
