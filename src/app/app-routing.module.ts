import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'start-quiz/:id',
    loadChildren: () => import('./start-quiz/start-quiz.module').then( m => m.StartQuizPageModule)
  },
  {
    path: 'answer-question',
    loadChildren: () => import('./answer-question/answer-question.module').then( m => m.AnswerQuestionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
