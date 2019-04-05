import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { QuizComponent } from './quiz/quiz.component';
import { BlogItemDetailsComponent } from './components/blog-item-details/blog-item-details.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'blog', component: BlogHomeComponent},
  { path: 'quiz', component: QuizComponent},
  { path: 'blog/detail/:id', component: BlogItemDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
