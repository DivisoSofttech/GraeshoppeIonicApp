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

    console.log("in user component");
    if (this.oauthService.hasValidAccessToken()) {
      //console.log("user", claim);
      console.log("profile", this.oauthService.loadUserProfile().then(data=>{
        console.log(data);
        this.userName=(<any>data).preferred_username;
      }));
      //this.userName = claim.preferred_username;
      //this.userId = claim.sub;
    }
  }

}
