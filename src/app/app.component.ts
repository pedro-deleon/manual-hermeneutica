import {
  Component,
  ChangeDetectorRef, OnDestroy
} from '@angular/core';
import {
  MediaMatcher
} from '@angular/cdk/layout';
import {
  Router, RouterOutlet
} from '@angular/router';
import {fadeInOut} from './animations';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInOut]
})
export class AppComponent implements OnDestroy {
  title = 'manual-hermeneutica-app';
  mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;
  opened = true;

  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher, route: Router,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer ) {
    this.matIconRegistry
      .addSvgIcon('github',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/github_mark_white.svg'));


    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);
    route.events.subscribe(() => {
      if (this.mobileQuery.matches) {
        this.opened = false;
      }
    });

  }

  prepareRoute(outlet: RouterOutlet) {
    console.log(outlet.activatedRoute.routeConfig.path);
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
  }
}
