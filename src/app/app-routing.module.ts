import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { TasksComponent } from './tasks/tasks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

const routes: Routes = [
  // path: A string that matches the URL
  // component: The component that the router should create when navigating to this route.
  {path: 'tasks', component: TasksComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'detail/:id', component:TaskDetailsComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
]

/*
@NgModule metadata 会初始化路由器，并开始监听浏览器地址的变化

RouterModule.forRoot(routes) adds the RouterModule to the AppRoutingModule imports array 
and configures it with the routes:
*/
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
