import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AuthorLoginComponent } from './author-login/author-login.component';
import { BookRegistrationComponent } from './book-registration/book-registration.component';
import { GetBookListComponent } from './get-book-list/get-book-list.component';
import { EditBookComponent } from './edit-book/edit-book.component';

const routes: Routes = [
  {path: '', component: AuthorLoginComponent},
  {path: 'login', component: AuthorLoginComponent},
  {path: 'registration', component: UserRegistrationComponent},
  {path: 'bookregistration', component: BookRegistrationComponent},
  {path: 'booklist', component: GetBookListComponent},
  {path: 'editBook/:id', component: EditBookComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
