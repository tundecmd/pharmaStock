import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {} from './auth/auth.module'
// import {
//   NbAuthComponent,
//   NbLoginComponent,
//   NbLogoutComponent,
//   NbRegisterComponent,
//   NbRequestPasswordComponent,
//   NbResetPasswordComponent,
// } from '@nebular/auth';
import { AuthGuard } from './auth/auth.guard';
// import { SecureInnerPagesGuard } from './auth/secure-inner-pages.guard';

const routes: Routes = [
  {
    path: 'pages',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'auth',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule),
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
