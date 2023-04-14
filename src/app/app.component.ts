
import { Component } from '@angular/core'; 
import { NavigationEnd, Router } from '@angular/router';

declare const gtag: Function;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BeautyFront';
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log("Google Analytics: ",event.urlAfterRedirects);
        gtag('event', 'page_view',
          {
            'page_path': event.urlAfterRedirects,
          }
        );
      }
    });
  }
}

