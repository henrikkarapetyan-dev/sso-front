import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {UserModel} from "../../../_models/user.model";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../_services/user.service";
import {GlobalStateService} from "../../../_services/global-state.service";

@Component({
  selector: 'app-realm-user',
  templateUrl: './realm-user.component.html',
  styleUrls: ['./realm-user.component.scss']
})
export class RealmUserComponent implements OnInit {
  private subscription: Subscription;
  public model_data!: UserModel[];

  constructor(
    private activateRoute: ActivatedRoute,
    public userService: UserService,
    private globalStateService: GlobalStateService
  ) {
    this.subscription = activateRoute.params.subscribe(params => {
      this.globalStateService.realm = params['realm']
    });
  }

  ngOnInit(): void {
  }

  onSort($event: any) {

  }

  edit(realmId: any) {

  }

  delete(realmId: any) {

  }

  openClientPage(realmId: any) {

  }

  setModelData($event: any[]) {
    this.model_data = $event
  }

  openUserPage(uuid: string) {

  }

}
