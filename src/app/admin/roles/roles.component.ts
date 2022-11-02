import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {RoleService} from "../../_services/role.service";
import {RoleModel} from "../../_models/role.model";

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  public model_data!: RoleModel[];
  public formGroup: FormGroup;
  private errorMessage: any;
  submitted: boolean = false;

  constructor(
    public roleService: RoleService,
    private router: Router,
    private modalService: NgbModal,
    private fb: FormBuilder
  ) {
    this.formGroup = this.fb.group({
        name: ["", [Validators.required]],
      }
    )
  }

  onSort($event: any) {

  }

  ngOnInit(): void {
  }

  get formControl() {
    return this.formGroup.controls;
  }

  setModelData($event: any[]) {
    this.model_data = $event;
  }

  delete(roleId: string) {
    console.log(roleId)
    this.roleService.delete(roleId).subscribe(data => {
      window.location.reload();
    });
  }

  submitForm(modal: any) {
    if (this.formGroup.valid) {
      modal.close();
      const {name} = this.formGroup.value;
      this.roleService.addNew(name).subscribe({
        next: data => {
          window.location.reload();
        },
        error: err => {
          this.errorMessage = err.error.message;
        }
      });
    }
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }
}
