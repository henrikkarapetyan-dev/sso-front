import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ScopeModel} from "../../_models/scope.model";
import {ScopeService} from "../../_services/scope.service";

@Component({
  selector: 'app-scopes',
  templateUrl: './scopes.component.html',
  styleUrls: ['./scopes.component.scss']
})
export class ScopesComponent implements OnInit {

  public model_data!: ScopeModel[];
  public formGroup: FormGroup;
  private errorMessage: any;
  submitted: boolean = false;

  constructor(
    public scopeService: ScopeService,
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
    this.scopeService.delete(roleId).subscribe(data => {
      window.location.reload();
    });
  }

  submitForm(modal: any) {
    if (this.formGroup.valid) {
      modal.close();
      const {name} = this.formGroup.value;
      this.scopeService.addNew(name).subscribe({
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
