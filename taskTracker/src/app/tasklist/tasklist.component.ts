import { Component, OnInit } from '@angular/core';
import { TasklistModel } from '../tasklist.model';
import { TasklistService } from '../tasklist.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css'],
})
export class TasklistComponent implements OnInit {
  constructor(public tasklistServer: TasklistService) {}

  displayedColumns = ['Id', 'Name', 'Task', 'Date'];

  ngOnInit(): void {
    this.displayTodoList();
  }

  todoObj: Array<TasklistModel> = [];

  submitTodoList(todoList: any) {
    console.log(todoList);
    this.tasklistServer.storeTodoList(todoList);
  }

  displayTodoList() {
    this.tasklistServer
      .getTodoList()
      .subscribe((data) => (this.todoObj = data));
    console.log(this.todoObj);
    //getting all the array data from "get" of tasklist.service.ts and assigning to the todoObj obj
    //called this function at ngOnIt and it is loading every 3 seconds or when the new data is pushed
  }
}
