import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RegisterFormModel} from "../../_models/register-form.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {RegisterFormService} from "../../_services/register-form.service";
import {parseJson} from "@angular/cli/src/utilities/json-file";
import {AuthenticationService} from "../../_services/authentication.service";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  public user_data!: RegisterFormModel;
  private realm!: string;
  private social_id!: string;

  formGroup: FormGroup;
  public submitted!: boolean;
  private session_id!: string;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public authService: AuthenticationService,
    private router: Router,
    private registerFormService: RegisterFormService
  ) {
    this.formGroup = this.fb.group({})
    this.route.queryParams.subscribe(params => {
      let data = parseJson(params['register_form_data']);
      this.user_data = parseJson(data.user_data)
      this.social_id = data.social_id
      this.session_id = data.session_id
      this.realm = data.realm_id
      if (!authService.isLoggedIn) {
        this.formGroup.addControl("password", new FormControl("", Validators.required))
        this.formGroup.addControl("username", new FormControl("", Validators.required))
        this.formGroup.addControl("phone", new FormControl(this.user_data.phone, Validators.required))
        this.formGroup.addControl("firstName", new FormControl(this.user_data.firstName, Validators.required))
        this.formGroup.addControl("lastName", new FormControl(this.user_data.lastName, Validators.required))
      }
      this.formGroup.addControl("email", new FormControl(this.user_data.email, Validators.required))
    });
  }

  get formControl() {
    return this.formGroup.controls;
  }

  ngOnInit(): void {

  }

  submitForm() {
    console.log("working")
    this.submitted = true;
    console.log(this.realm, this.social_id)
    console.log(this.formGroup.valid)
    if (this.formGroup.valid) {
      this.registerFormService.addNew(this.formGroup.value, this.session_id,this.realm, this.social_id)
        .subscribe({
          next: data => {
            if (this.authService.isLoggedIn) {
              this.router.navigate(["/user-profile"]).then(r => {
              })
            } else {
              this.router.navigate(["/login"]).then(r => {
              })
            }
          },
          error: err => {
            console.log(err)
          }
        });
    }

  }
}
