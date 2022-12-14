import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {RealmSocialNetworkModel} from "../../../../../_models/realm-social-network.model";
import {RealmSocialNetworksService} from "../../../../../_services/realm-social-networks.service";
import {ActivatedRoute, Router} from "@angular/router";
import {GlobalStateService} from "../../../../../_services/global-state.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public realm!: string;
  private subscription!: Subscription;
  public realmSocialNetwork!: RealmSocialNetworkModel;
  private social_id!: string;
  formGroup!: FormGroup;
  submitted!: boolean;

  constructor(
    private realmSocialNetworkService: RealmSocialNetworksService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private globalStateService: GlobalStateService
  ) {
    this.subscription = activateRoute.params.subscribe(params => {
      this.globalStateService.realm = params['realm'];
      this.social_id = params['social_id']
      this.realm=params['realm']
    });

    this.formGroup = this.fb.group({
        appId: ["", [Validators.required]],
        appSecret: ["", [Validators.required]],
        scopes: ["", [Validators.required]],
        status: ["", [Validators.required]],
      }
    )
  }

  ngOnInit(): void {
    this.realmSocialNetworkService.getOne(this.social_id).subscribe(data => {
      this.realmSocialNetwork = data;
      this.formGroup.setValue({
          appId: this.realmSocialNetwork.appId,
          appSecret: this.realmSocialNetwork.appSecret,
          scopes: this.realmSocialNetwork.scopes,
          status: this.realmSocialNetwork.status,
        }
      )
    });
  }

  get formControl() {
    return this.formGroup.controls;
  }

  submitForm() {
    this.submitted = true;
    if (this.formGroup.valid) {
      this.realmSocialNetworkService.edit(this.realm, this.social_id, this.formGroup.value)
        .subscribe({
          next: data => {
            this.router.navigate(["/admin/" + this.realm + "/social-networks"]).then(r => {})
          },
          error: err => {
            console.log(err)
          }
        });
    }
  }
}
