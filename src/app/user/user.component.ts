import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  userName: string;
  userId: string;

  constructor(private oauthService: OAuthService) { }

  ngOnInit() {

    let claim;
    if ((claim = this.oauthService.getIdentityClaims()) != null) {
      console.log("user", claim);
      this.userName = claim.preferred_username;
      this.userId = claim.sub;
    }
  }

}
