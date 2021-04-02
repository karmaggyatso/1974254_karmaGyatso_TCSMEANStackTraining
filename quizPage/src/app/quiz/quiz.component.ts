import { Component, OnInit, Inject } from '@angular/core';
import { QuizModule } from '../quizModule.module';
import { QuizService } from '../quizService.service';
import { Router } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
//angular dialogue from material. this will allow to display prompt.
//i have also created quizOverview.component.html in the quiz component
//link for reference: https://material.angular.io/components/dialog/overview

export interface DialogData {
  correctAnswers: string;
  inCorrectAnswers: string;
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  currentQuiz = 0;
  anyVariable = -1;
  correctAnswers: number = 0;
  inCorrectAnswers: number = 0;

  constructor(
    public quizServer: QuizService, //for json server
    public dialog: MatDialog, //for prompt display
    public router: Router //for routing
  ) {}

  ngOnInit(): void {
    this.displayQuiz(); //it will load the server async
  }

  quizObj: Array<QuizModule> = []; //assigning data type as Quiz module

  displayQuiz() {
    this.quizServer.getQuiz().subscribe((data) => (this.quizObj = data)); //from quizService.service.ts
  }

  testAns(a: number, b: number) {
    // console.log(a + ' ' + b);

    if (a === b) {
      this.anyVariable = 0; //if the answer matches its 0
      this.correctAnswers++;
    } else {
      //else 1
      this.anyVariable = 1;
      this.inCorrectAnswers++;
    }
  }

  next() {
    if (this.currentQuiz === this.quizObj.length - 1) {
      console.log('you have reached end of the quiz');
      this.displayResult(); //if the quiz is at the end of the length of the obj, this method will trigger.
      //basically prompts the result
    } else {
      //otherwise we it will still counter
      this.currentQuiz++;
    }
  }

  previous() {
    if (this.currentQuiz > 0) {
      this.currentQuiz--;
    }
  }

  displayResult(): void {
    const dialogRef = this.dialog.open(QuizOverviewComponent, {
      //when clicked to button, a prompt will trigger which will open quizOverview.component.html
      width: '250px',
      data: {
        inCorrectAnswers: this.inCorrectAnswers, //setting the value of the obj to the current data
        correctAnswers: this.correctAnswers,
      },
    });

    console.log('display incorrect');
    console.log(this.inCorrectAnswers);
    dialogRef.afterClosed().subscribe(() => {
      //program closes if we click outside of the prompt area
      console.log('The dialog was closed');
      this.router.navigate(['home']); //it will then navigare to home page
    });
  }
}

@Component({
  //this is the component that will trigger from displayResult()
  selector: 'quizOverview',
  templateUrl: 'quizOverview.component.html',
})
export class QuizOverviewComponent {
  constructor(
    public dialogRef: MatDialogRef<QuizOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
