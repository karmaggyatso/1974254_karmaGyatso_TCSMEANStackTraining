import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { FrontPageComponent } from './front-page/front-page.component';

const routes: Routes = [
  { path: 'home', component: FrontPageComponent },
  { path: 'quizes', component: QuizComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
