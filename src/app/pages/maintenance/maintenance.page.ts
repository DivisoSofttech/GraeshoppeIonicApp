import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { OAuthService } from 'angular-oauth2-oidc';
import { CommandResourceService } from 'src/app/api/services';
import { KeycloakAdminClient } from 'keycloak-admin/lib/client';
import RoleRepresentation from 'keycloak-admin/lib/defs/roleRepresentation';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.page.html',
  styleUrls: ['./maintenance.page.scss'],
})
export class MaintenancePage implements OnInit {

  username: string;
  password: string;
  role = 'Role';
  email: string;
  kcAdminClient: KeycloakAdminClient;
  phone: number;
  agreement: boolean;
  roles: RoleRepresentation[];

  constructor(private navCtrl: NavController,
              private toastController: ToastController,
              private oauthService: OAuthService,
              private commandService: CommandResourceService) {
  }

  async ngOnInit() {
    this.kcAdminClient = new KeycloakAdminClient();
    this.kcAdminClient.setConfig({
      baseUrl: 'http://35.196.86.249:8080/auth'
    });
    await this.configureKeycloakAdmin().then(() => {
      this.kcAdminClient.setConfig({
        realmName: 'graeshoppe',
      });
      this.kcAdminClient.roles.find().then(roles => {
        this.roles = roles;
      });
    });
  }

  async configureKeycloakAdmin() {
    await this.kcAdminClient.auth({
      username: 'admin',
      password: 'karma123',
      grantType: 'password',
      clientId: 'admin-cli'
    });
  }

  async createUser() {
    let rol: RoleRepresentation;
    await this.roles.forEach(role => {
      if (role.name === this.role) {
        rol = role;
      }
    });
    console.log(rol);
    await this.kcAdminClient.users.create({
      username: this.username,
      email: this.email,
      credentials: [{
        type: 'password',
        value: this.password
      }],
      enabled: true,
      realmRoles: [rol.id]
    }).then(data => {
      this.clear();
    }).catch(err => {
      console.log('Error creating user');
    });
    // this.kcAdminClient.users.addRealmRoleMappings({})
  }

  clear() {
    this.username = '';
    this.email = '';
    this.password = '';
    this.role = 'Role';
  }
}