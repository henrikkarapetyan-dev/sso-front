import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../_services/authentication.service";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {RealmSocialNetworksService} from "../_services/realm-social-networks.service";
import {RealmSocialNetworkModel} from "../_models/realm-social-network.model";
import {GlobalStateService} from "../_services/global-state.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted = false;
  public realmSocialNetworks!: RealmSocialNetworkModel[];

  public apiUrl!:string;
  errorMessage = '';
  isLoginFailed: boolean = false;
  public realm!: string;
  get formControl() {
    return this.loginForm.controls;
  }
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private realmSocialNetworkService: RealmSocialNetworksService,
    private globalStateService: GlobalStateService,
    private readonly fb: FormBuilder
  ) {
    globalStateService.realm = environment.realm
    this.realm = environment.realm
    this.apiUrl= environment.apiUrl
    this.loginForm = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.realmSocialNetworkService.getAll().subscribe(data => {
      this.realmSocialNetworks = data;
    });
  }

  submitForm(): void {
    this.submitted = true;
    if (this.loginForm.valid) {
      const {username, password} = this.loginForm.value;
      this.authService.login(username, password).subscribe({
        next: data => {
          this.router.navigate(['/user-profile']);
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      });
    }
  }

  reloadPage(): void {
    window.location.reload();
  }
}
