import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

// always remenber to export the class so that it can be imported elsewhere
export class TasksComponent implements OnInit{


  constructor(private taskService: TaskService, private messageService: MessageService){ }

  // add a property called task, instantiate Task class, so that it can be added in the html file
  // task1: Task = {
  //   id:1,
  //   summary: 'make dinner',
  //   details: 'make the hambergur for the dinner'
  // }

  tasks: Task[] = [];
  
  ngOnInit(): void {
    // ngOnInit is a lifecycle hook, Angular calls this method shortly after creating a component.
    // It's a good place to put initialization logic. in this case, invoke the getTask() method to get data
    this.getTasks();
  }



  getTasks(): void {
    // 不用Observable的时候用这个： this.tasks = this.taskService.getTasks();
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks); // 把taskService返回的tasks异步赋给this.tasks
    // 使用异步方式，当task Service从远端服务器获取数据时，即可以工作
  }

}
