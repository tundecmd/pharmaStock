import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { NbAuthSocialLink, NB_AUTH_OPTIONS, getDeepFromObject } from '@nebular/auth';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {

  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = '';

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  socialLinks: NbAuthSocialLink[] = [];

  constructor(protected auth: AuthService, @Inject(NB_AUTH_OPTIONS) protected options = {},
  protected cd: ChangeDetectorRef, protected router: Router) {
    this.redirectDelay = this.getConfigValue('forms.register.redirectDelay');
    this.showMessages = this.getConfigValue('forms.register.showMessages');
    this.strategy = this.getConfigValue('forms.register.strategy');
    this.socialLinks = this.getConfigValue('forms.register.socialLinks');
  }

  register(): void {
    this.errors = this.messages = [];
    this.submitted = true;

    this.auth.register(this.user.email, this.user.password, this.user.fullName, this.user.company)
      .then(() => {
        this.submitted = false;
        this.messages = [];

        this.redirectToDashboard();
      })
      .catch((err) => {
        this.submitted = false;
        this.errors = [err];
      });
  }


  redirectToDashboard() {
    setTimeout(() => {
      this.router.navigate(['pages/dashboard']);
    }, this.redirectDelay);
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.options, key, null);
  }
}
