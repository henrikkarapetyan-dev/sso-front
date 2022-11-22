import {Component, EventEmitter, OnInit} from '@angular/core';
import {RealmService} from "../../_services/admin/realm.service";
import {RealmModel} from "../../_models/realm.model";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-realms',
  templateUrl: './realms.component.html',
  styleUrls: ['./realms.component.scss']
})
export class RealmsComponent implements OnInit {
  closeResult = '';

  public model_data!: RealmModel[];
  public formGroup: FormGroup;
  private errorMessage: any;
  submitted: boolean = false;

  constructor(
    public realmService: RealmService,
    private router: Router,
    private modalService: NgbModal,
    private fb: FormBuilder
  ) {
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

  onSort($event: any) {

  }

  delete(realmId: any) {
    this.realmService.delete(realmId).subscribe(data=>{
     window.location.reload();
    });
  }

  openClientsPage(realmId: any) {
    this.router.navigateByUrl("/admin/" + realmId + "/detail-view")
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

  submitForm(modal: any) {
    if (this.formGroup.valid) {
      modal.close();
      const {name} = this.formGroup.value;
      this.realmService.addNew(name).subscribe({
        next: data => {
          window.location.reload();
        },
        error: err => {
          this.errorMessage = err.error.message;
        }
      });
    }

  }

  setModelData($event: any) {
    this.model_data =  $event;
  }

}
