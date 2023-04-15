import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
// ^ ngModel lives here, once importing a library,
// we should add FormsModule to the imports array in @NgModule below. 
// The imports array contains the list of external modules that the application needs.

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component'; // 所有组件都得来这个文件注册一下，Every component must be declared in exactly one NgModule.
// libraries and files application requires


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskDetailsComponent,
    MessagesComponent,
    DashboardComponent, // 注册组件时这里也需要添加一下
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule // here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
