import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  // The messageService property must be public because we're going to bind to it in the html template.
  constructor (public messageService:MessageService) { }
}
