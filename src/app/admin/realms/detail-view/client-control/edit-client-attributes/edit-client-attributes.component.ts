import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ClientAdditionalInformationModel} from "../../../../../_models/client-additional-information.model";
import {GlobalStateService} from "../../../../../_services/global-state.service";
import {ClientAdditionalInformationService} from "../../../../../_services/client-additional-information.service";

@Component({
  selector: 'app-edit-client-attributes',
  templateUrl: './edit-client-attributes.component.html',
  styleUrls: ['./edit-client-attributes.component.scss']
})
export class EditClientAttributesComponent implements OnInit {

  @Input() client_id!: string;
  @Input() realm!: string;

  private subscription: Subscription;
  public model_data!: any[];
  public formGroup: FormGroup;
  private errorMessage: any;
  submitted: boolean = false;

  constructor(
    private activateRoute: ActivatedRoute,
    private globalStateService: GlobalStateService,
    private router: Router,
    private modalService: NgbModal,
    private fb: FormBuilder,
    public clientAdditionalInformationService: ClientAdditionalInformationService
  ) {
    this.subscription = activateRoute.params.subscribe(params => {
      this.globalStateService.realm = params['realm'];
    });
    this.formGroup = this.fb.group({
        name: ["", [Validators.required]],
        text: ["", [Validators.required]],
      }
    )
  }

  onSort($event: any) {

  }

  ngOnInit(): void {
    this.globalStateService.client_id = this.client_id;
  }

  get formControl() {
    return this.formGroup.controls;
  }

  setModelData($event: ClientAdditionalInformationModel[]) {
    this.model_data = $event;
  }

  delete(roleId: string) {
    this.clientAdditionalInformationService.deleteById(roleId).subscribe(data => {
      window.location.reload();
    });
  }

  submitForm(modal: any) {
    if (this.formGroup.valid) {
      modal.close();
      this.clientAdditionalInformationService.addNew(this.formGroup.value).subscribe({
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
