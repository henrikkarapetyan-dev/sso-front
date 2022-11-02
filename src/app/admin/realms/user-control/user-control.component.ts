import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../_services/user.service";
import {GlobalStateService} from "../../../_services/global-state.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.scss']
})
export class UserControlComponent implements OnInit {

  private subscription: Subscription;
  public user_id!: string;
  public realm!: string;
  active: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private userService: UserService,
    private globalStateService: GlobalStateService,
    private fb: FormBuilder
  ) {
    this.subscription = activateRoute.params.subscribe(params => {
      this.globalStateService.realm = params['realm']
      this.globalStateService.user_id = params['id']
      this.user_id = this.globalStateService.user_id;
      this.realm = this.globalStateService.realm;
    });
  }

  ngOnInit(): void {
  }

}
