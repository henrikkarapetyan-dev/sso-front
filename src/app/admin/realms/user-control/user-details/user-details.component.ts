import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../../_services/user.service";
import {GlobalStateService} from "../../../../_services/global-state.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  private subscription: Subscription;
  submitted!: boolean;
  private user_id!: string;

  constructor(
    private activateRoute: ActivatedRoute,
    private userService: UserService,
    private globalStateService: GlobalStateService,
    private fb: FormBuilder
  ) {
    this.subscription = activateRoute.params.subscribe(params => {
      this.globalStateService.realm = params['realm']
      this.user_id = params['id']
    });
  }

  ngOnInit(): void {
  }

}
