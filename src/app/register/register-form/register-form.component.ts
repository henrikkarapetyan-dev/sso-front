import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
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
  public user_data!: [];
  private realm!: string;
  private social_id!: string;

  formGroup: FormGroup;
  public submitted: boolean=false;
  private session_id!: string;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public authService: AuthenticationService,
    private router: Router,
    private registerFormService: RegisterFormService
  ) {
    this.submitted=false;
    this.formGroup = this.fb.group({})
    this.route.queryParams.subscribe(params => {
      let data = parseJson(params['register_form_data']);
      this.user_data = parseJson(data.user_data)
      console.log(this.user_data);
      this.social_id = data.social_id
      this.session_id = data.session_id
      this.realm = data.realm_id
      for (const field of this.user_data) {
        this.formGroup.addControl(field, new FormControl("", Validators.required))
      }
    });
  }

  get formControl() {
    return this.formGroup.controls;
  }

  ngOnInit(): void {

  }

  submitForm() {
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
