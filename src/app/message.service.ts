import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// 该服务对外暴露了它的messages变量，以及提供两个方法add 和 clear
export class MessageService {

  constructor() { }
  
  messages: string[] = [];

  add(message:string) {
    this.messages.push(message); //将一条message添加到数组末尾
  }

  clear() {
    this.messages= [] // 清空数组
  }
}
