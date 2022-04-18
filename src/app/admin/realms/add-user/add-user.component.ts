import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {GlobalStateService} from "../../../_services/global-state.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../_services/user.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  private subscription: Subscription;
  formGroup: FormGroup;
  submitted!: boolean;

  constructor(
    private activateRoute: ActivatedRoute,
    private userService: UserService,
    private globalStateService: GlobalStateService,
    private fb: FormBuilder
  ) {
    this.subscription = activateRoute.params.subscribe(params => {
      this.globalStateService.realm = params['realm']
    });

    this.formGroup = this.fb.group({
        firstName: ["", [Validators.required]],
        lastName: ["", [Validators.required]],
        username: ["", [Validators.required]],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.pattern(
          "(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>\"'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}"
        )]],
        enabled: ["", []]
      }
    )
  }

  get formControl() {
    return this.formGroup.controls;
  }

  ngOnInit(): void {
  }

  submitForm() {
    this.submitted = true;
    if (this.formGroup.valid) {
      console.log("ok")
      this.userService.addNew(this.formGroup.value).subscribe({
        next: data => {
          console.log(data);
        },
        error: err => {
          console.log(err)
        }
      });
    }
  }
}
