import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { QuizModule } from '../quizModule.module';
import { QuizService } from '../quizService.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  selection: any = '';

  currentQuiz = 1;

  correctAnswers = 0;
  inCorrectAnswers = 0;

  constructor(public quizServer: QuizService) {}

  ngOnInit(): void {
    this.displayQuiz();
  }

  quizObj: Array<QuizModule> = []; //assigning data type as Quiz module

  displayQuiz() {
    this.quizServer.getQuiz().subscribe((data) => (this.quizObj = data));
    console.log(this.quizObj);
  }

  // onAnswer(option: string) {
  //   this.currentQuiz++;
  // }

  recordAns(correct: boolean) {
    if (correct) {
      this.correctAnswers++;
    } else {
      this.inCorrectAnswers++;
    }
  }

  counter() {
    this.currentQuiz++;

    console.log(this.quizObj);
  }
}
