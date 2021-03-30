import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TasklistModel } from './tasklist.model';

@Injectable({
  providedIn: 'root',
})
export class TasklistService {
  constructor(public http: HttpClient) {}

  storeTodoList(list: any) {
    this.http.post('http://localhost:3000/todoList', list).subscribe(
      (result) => console.log(result),
      (error) => console.log(error)
    );
  }

  getTodoList(): Observable<TasklistModel[]> {
    //importing from tasklist.mode.ts
    return this.http.get<TasklistModel[]>('http://localhost:3000/todoList');

    //the return type is observable. if use of subscribe the we can't access in the client side. so we need to return the observable
  }
}
