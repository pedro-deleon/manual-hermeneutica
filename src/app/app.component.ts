import {
  Component,
  ChangeDetectorRef
} from "@angular/core";
import {
  MediaMatcher
} from "@angular/cdk/layout";
import {
  Router
} from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "manual-hermeneutica-app";
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  opened: Boolean = true;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, route: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);




    route.events.subscribe(() => {
      if (this.mobileQuery.matches) {
        this.opened = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}
