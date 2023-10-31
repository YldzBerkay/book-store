import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpInformationsComponent } from './pages/sign-up-informations/sign-up-informations.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

const routes: Routes = [
  {path:'forgot-password', component: ForgotPasswordComponent},
  {path:'sign-up-informations', component: SignUpInformationsComponent},
  {path:'sign-in', component: SignInComponent},
  {path:'sign-up', component: SignUpComponent},
  {path:'', redirectTo: '/sign-up', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
