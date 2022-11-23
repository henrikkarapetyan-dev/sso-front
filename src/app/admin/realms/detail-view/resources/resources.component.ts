import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AvailableStatusesModel} from "../../../../_models/available-statuses.model";
import {ActivatedRoute, Router} from "@angular/router";
import {GlobalStateService} from "../../../../_services/global-state.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AvailableStatusesService} from "../../../../_services/available-statuses.service";
import {ResourceModel} from "../../../../_models/resource.model";
import {ResourceService} from "../../../../_services/resource.service";

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  private subscription: Subscription;
  public model_data!: ResourceModel[];
  public formGroup: FormGroup;
  private errorMessage: any;
  submitted: boolean = false;
  public realm!: string;
  private _statuses!: AvailableStatusesModel[];

  constructor(
    public resourceService: ResourceService,
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
        resourceId: ["", [Validators.required]],
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
    this.resourceService.delete(roleId).subscribe(data => {
      window.location.reload();
    });
  }

  submitForm(modal: any) {
    if (this.formGroup.valid) {
      modal.close();
      const {resourceId} = this.formGroup.value;
      this.resourceService.addNew(resourceId).subscribe({
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

  changeValueState(uuid: string, name: string, role: ResourceModel) {
    role.status = name;
  }

}
