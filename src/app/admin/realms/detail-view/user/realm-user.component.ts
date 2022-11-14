import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {UserModel} from "../../../../_models/user.model";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../../_services/user.service";
import {GlobalStateService} from "../../../../_services/global-state.service";

@Component({
  selector: 'app-user',
  templateUrl: './realm-user.component.html',
  styleUrls: ['./realm-user.component.scss']
})
export class RealmUserComponent implements OnInit {
  private subscription: Subscription;
  public model_data!: UserModel[];
  public realm!: string;

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    public userService: UserService,
    private globalStateService: GlobalStateService
  ) {
    this.subscription = activateRoute.params.subscribe(params => {
      this.globalStateService.realm = params['realm'];
      this.realm = params['realm'];
    });
  }

  ngOnInit(): void {
  }

  onSort($event: any) {

  }

  edit(realmId: any) {

  }

  delete(userId: string) {
    this.userService.deleteById(userId).subscribe({
      next: data => {
        console.log("/admin/" + this.globalStateService.realm + "/users")
        this.router.navigateByUrl("/admin/" + this.globalStateService.realm + "/users").then(r => {
          console.log(r)
        })
      }
    })
  }

  openClientPage(realmId: any) {

  }

  setModelData($event: any[]) {
    this.model_data = $event
  }
}
