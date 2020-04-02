import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './students/registration/registration.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'student-registraion', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
