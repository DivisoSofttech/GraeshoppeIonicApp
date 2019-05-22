import { Store } from './../../api/models/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { QueryResourceService } from 'src/app/api/services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-store',
  templateUrl: './update-store.page.html',
  styleUrls: ['./update-store.page.scss'],
})
export class UpdateStorePage implements OnInit {

  private store: Store;  
  constructor(private queryService: QueryResourceService, private oauthService: OAuthService) { }

  ngOnInit() {

    /*     this.queryService.findStoreByRegNoUsingGET({regNo:}) */
    let claim, username;
    if ((claim = this.oauthService.getIdentityClaims()) != null) {
      console.log("user", claim);
      username = claim.preferred_username;
/*       this.queryService.findStoreByRegNoUsingGET({ regNo: username }).subscribe(data => {
        console.log(data);
      }) */
      this.queryService.findStoreByRegNoUsingGET({ regNo: username }).subscribe(
        data => {
          console.log(data.content);
          this.store=data.content[0];

        }
      )
    }
  }
}
