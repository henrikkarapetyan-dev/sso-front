import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {GlobalStateService} from "../../../../../../_services/global-state.service";
import {ClientsService} from "../../../../../../_services/admin/clients.service";

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.scss']
})
export class ClientAddComponent implements OnInit {
  private subscription: Subscription;
  formGroup: FormGroup;
  submitted!: boolean;

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private clientService: ClientsService,
    private globalStateService: GlobalStateService,
    private fb: FormBuilder
  ) {
    this.subscription = activateRoute.params.subscribe(params => {
      this.globalStateService.realm = params['realm']
    });

    this.formGroup = this.fb.group({
        name: ["", [Validators.required]],
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
    console.log(this.globalStateService.realm)
    if (this.formGroup.valid) {
      this.clientService.addNew(this.formGroup.value)
      .subscribe({
        next: data => {
          this.router.navigate(["/admin/" + this.globalStateService.realm + "/client-control/"+data.client_id]).then(r => {
          })
        },
        error: err => {
          console.log(err)
        }
      });
    }
  }
}
