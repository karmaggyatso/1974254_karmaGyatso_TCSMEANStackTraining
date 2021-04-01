import { Injectable } from '@angular/core';
import { QuizModule } from './quizModule.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(public http: HttpClient) {}

  getQuiz(): Observable<QuizModule[]> {
    return this.http.get<QuizModule[]>('http://localhost:3000/questions');
  }
}
