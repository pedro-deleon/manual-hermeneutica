import {
  Component,
  ChangeDetectorRef, OnDestroy, HostListener
} from '@angular/core';
import {
  MediaMatcher
} from '@angular/cdk/layout';
import {
  Router, RouterOutlet
} from '@angular/router';
import { fadeInOut } from './animations';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInOut]
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;
  opened = true;

  constructor(
    public changeDetectorRef: ChangeDetectorRef,
    public media: MediaMatcher,
    public route: Router,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private vps: ViewportScroller) {
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
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  onActiveRoute(event) {
    this.vps.scrollToPosition([0, 0]);
  }




  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth <= 900) {
      this.opened = false;
    } else {
      this.opened = true;
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
  }



}
