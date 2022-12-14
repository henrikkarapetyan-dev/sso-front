import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RealmSocialNetworksService} from "../../../../../_services/realm-social-networks.service";
import {ActivatedRoute, Router} from "@angular/router";
import {GlobalStateService} from "../../../../../_services/global-state.service";

@Component({
  selector: 'app-add-realm-social-network',
  templateUrl: './add-realm-social-network.component.html',
  styleUrls: ['./add-realm-social-network.component.scss']
})
export class AddRealmSocialNetworkComponent implements OnInit {

  public realm!: string;
  private subscription!: Subscription;
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
      this.realm = params['realm']
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
  }

  get formControl() {
    return this.formGroup.controls;
  }

  submitForm() {
    this.submitted = true;
    if (this.formGroup.valid) {
      this.realmSocialNetworkService.addNew(this.realm, this.social_id, this.formGroup.value)
        .subscribe({
          next: data => {
            this.router.navigate(["/admin/" + this.realm + "/social-networks"]).then(r => {
            })
          },
          error: err => {
            console.log(err)
          }
        });
    }
  }
}
