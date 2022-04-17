import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../_services/authentication.service";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted = false;

  errorMessage = '';
  isLoginFailed: boolean = false;
  get formControl() {
    return this.loginForm.controls;
  }
  constructor(private authService: AuthenticationService, private router: Router, private readonly fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ["", [Validators.required]],
      password: [
        "",
        [
          Validators.required,
          // Validators.pattern(
          //   "(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>\"'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}"
          // )
        ]
      ]
    });
  }

  ngOnInit(): void {
  }

  submitForm(): void {
    this.submitted = true;
    if (this.loginForm.valid) {
      const {username, password} = this.loginForm.value;
      this.authService.login(username, password).subscribe({
        next: data => {
          this.router.navigate(['/home']);
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      });
    }
  }

  reloadPage(): void {
    window.location.reload();
  }
}
