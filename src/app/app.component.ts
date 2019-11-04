/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { NbMenuService } from '@nebular/theme';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService, private menuService: NbMenuService, private auth: AuthService) {
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();

    this.menuService.onItemClick()
      .subscribe((event) => {
        this.onContextItemClicked(event.item.title);
      });
  }

  onContextItemClicked(title) {

    if (title === 'Log out') {
      this.auth.logout();
    }
  }
}
