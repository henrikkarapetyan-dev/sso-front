import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../../../../_services/user.service";
import {DragulaService} from "ng2-dragula";
import {UserRolesModel} from "../../../../../_models/user-roles.model";

@Component({
  selector: 'app-edit-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.scss']
})
export class UserRolesComponent implements OnInit {

  @Input() user_id!: string;
  @Input() realm!: string;
  userRolesData!: UserRolesModel[];
  userAvailableRoles!: UserRolesModel[];
  groupName = "user_roles"

  constructor(private userService: UserService, private dragulaService: DragulaService) {
    let group = this.dragulaService.find(this.groupName);
    if (!group) {

      this.dragulaService.createGroup(this.groupName, {
        // ...
      });

      this.dragulaService.dropModel(this.groupName).subscribe(args => {
        this.userService.updateUserRoles(this.realm, this.user_id, args.item).subscribe(data => {
        });
      });
    }

  }

  ngOnInit(): void {
    this.userService.rolesInfo(this.realm, this.user_id)
      .subscribe(
        data => {
          this.userRolesData = data;
        }
      );

    this.userService.availableRolesInfo(this.realm, this.user_id)
      .subscribe(
        data => {
          this.userAvailableRoles = data;
        }
      );

  }
}

