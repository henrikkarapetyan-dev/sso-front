import {Component, OnInit} from '@angular/core';
import {RealmSocialNetworksService} from "../_services/realm-social-networks.service";
import {RealmSocialNetworkModel} from "../_models/realm-social-network.model";
import {GlobalStateService} from "../_services/global-state.service";
import {environment} from "../../environments/environment";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public realmSocialNetworks!: RealmSocialNetworkModel[];
  public realm!:string;
  public apiUrl!:string;
  formGroup!: FormGroup;
  submitted!: boolean;
  constructor(
    private fb: FormBuilder,

    private realmSocialNetworkService: RealmSocialNetworksService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private globalStateService: GlobalStateService) {
    globalStateService.realm = environment.realm
    this.apiUrl = environment.apiUrl
    this.realm = environment.realm

    this.formGroup = this.fb.group({
        firstName: ["", [Validators.required]],
        LastName: ["", [Validators.required]],
        email: ["", [Validators.required]],
        password: ["", [Validators.required]],
        password_repeat: ["", [Validators.required]],
      }
    )
  }

  ngOnInit(): void {
    this.realmSocialNetworkService.getAll().subscribe(data => {
      this.realmSocialNetworks = data;
    });
  }


  get formControl() {
    return this.formGroup.controls;
  }

  submitForm() {
    this.submitted = true;
    if (this.formGroup.valid) {
      // this.realmSocialNetworkService.addNew(this.realm, this.social_id, this.formGroup.value)
      //   .subscribe({
      //     next: data => {
      //       this.router.navigate(["/admin/" + this.realm + "/social-networks"]).then(r => {
      //       })
      //     },
      //     error: err => {
      //       console.log(err)
      //     }
      //   });
    }
  }
}
