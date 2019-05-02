import { OAuthService } from 'angular-oauth2-oidc';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  username: string;
  email: string;
  userId: string;

  constructor(private oauthService: OAuthService) { }

  ngOnInit() {
    let claim;
    if ((claim = this.oauthService.getIdentityClaims()) != null) {
      console.log("user", claim);
      this.username = claim.preferred_username;
      this.userId = claim.sub;
      this.email = claim.email;
    }

  }

  updateUser() {
    console.log("edit user profile");
  }
}
