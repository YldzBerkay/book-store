import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpInformationsComponent } from './pages/sign-up-informations/sign-up-informations.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { VerifyComponent } from './pages/verify/verify.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthguardService } from './services/base/authguard.service';

const routes: Routes = [
  {path:'verify', component: VerifyComponent},
  {path:'forgot-password', component: ForgotPasswordComponent},
  {path:'sign-up-informations', component: SignUpInformationsComponent},
  {path:'sign-in', component: SignInComponent, canActivate: [AuthguardService]},
  {path:'sign-up', component: SignUpComponent, canActivate: [AuthguardService]},
  {path:'**', component: HomeComponent},
  {path:'osuruk', component: HomeComponent},
  {path:'', component: HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthguardService]
})
export class AppRoutingModule {

}
