/* This service could grab data from localStorage or other Database*/
import { Injectable } from '@angular/core';
import { Task } from "./task"
import { TASKS } from './mock-tasks';
import { Observable, of } from 'rxjs'; // 使用RxJS的of()of函数来模拟从服务器返回数据
import { MessageService } from './message.service';

/*  @Injectable marks the class as one that participates in the dependency injection system. 
 The HeroService class is going to provide an injectable service, 
 and it can also have its own injected dependencies. 
 It doesn't have any dependencies yet. */
@Injectable({
  providedIn: 'root'
})

export class TaskService {

  constructor(private messageService: MessageService) { } //服务中的服务，把Message服务注入Task服务中
  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    this.messageService.add('TaskService: fetched tasks.');
    return tasks;
  }
  getTask(id: number): Observable<Task> {
    // For now, assume that a hero with the specified `id` always exists.
  const task = TASKS.find(h => h.id === id)!;
  this.messageService.add(`TaskService: fetched task id=${id}`);
  return of(task);
  }
}
