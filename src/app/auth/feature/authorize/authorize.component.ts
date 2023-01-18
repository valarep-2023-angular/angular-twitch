import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../data-access/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.scss']
})
export class AuthorizeComponent implements OnInit, OnDestroy {

  private subscription: Subscription | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.subscription = this.route.fragment.subscribe((urlParams) => {
      if (urlParams) {
        const token = this.authService.extractTokenFromUrlParams(urlParams);
        this.authService.saveToken(token);
        this.router.navigateByUrl('games').then(this.unsubscribe);
      } else {
        this.authService.redirectToAuthenticationPage();
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }

  unsubscribe(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
