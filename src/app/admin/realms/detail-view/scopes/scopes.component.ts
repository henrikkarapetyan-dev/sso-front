import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ScopeModel} from "../../../../_models/scope.model";
import {ScopeService} from "../../../../_services/scope.service";
import {GlobalStateService} from "../../../../_services/global-state.service";
import {Subscription} from "rxjs";
import {AvailableStatusesService} from "../../../../_services/available-statuses.service";
import {AvailableStatusesModel} from "../../../../_models/available-statuses.model";

@Component({
  selector: 'app-scopes',
  templateUrl: './scopes.component.html',
  styleUrls: ['./scopes.component.scss']
})
export class ScopesComponent implements OnInit {
  private subscription: Subscription;
  public model_data!: ScopeModel[];
  public formGroup: FormGroup;
  private errorMessage: any;
  submitted: boolean = false;
  public realm!: string;
  private _statuses!: AvailableStatusesModel[];

  constructor(
    public scopeService: ScopeService,
    private activateRoute: ActivatedRoute,
    private globalStateService: GlobalStateService,
    private router: Router,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private availableStatusesService: AvailableStatusesService
  ) {
    this.subscription = activateRoute.params.subscribe(params => {
      this.globalStateService.realm = params['realm'];
      this.realm = params['realm'];
    });
    availableStatusesService.getAll().subscribe(data => {
      this._statuses = data;
    });
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


  get statuses(): AvailableStatusesModel[] {
    return this._statuses;
  }

  changeValueState(uuid: string, name: string, role: ScopeModel) {
    role.status = name;
  }
}
