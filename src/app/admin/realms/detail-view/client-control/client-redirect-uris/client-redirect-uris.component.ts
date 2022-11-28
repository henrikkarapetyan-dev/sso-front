import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RedirectUriModel} from "../../../../../_models/redirect-uri.model";
import {RedirectUriService} from "../../../../../_services/redirect-uri.service";

@Component({
  selector: 'app-client-redirect-uris',
  templateUrl: './client-redirect-uris.component.html',
  styleUrls: ['./client-redirect-uris.component.scss']
})
export class ClientRedirectUrisComponent implements OnInit {

  @Input() client_id!: string;
  @Input() realm!: string;
  redirectUriData!: RedirectUriModel[];
  public formGroup: FormGroup;
  private errorMessage: any;
  submitted: boolean = false;

  constructor(private redirectUriService: RedirectUriService,
              private modalService: NgbModal,
              private fb: FormBuilder
  ) {
    this.formGroup = this.fb.group({
        uri: ["", [Validators.required]],
      }
    )
  }

  get formControl() {
    return this.formGroup.controls;
  }


  ngOnInit(): void {
    this.redirectUriService.getAll(this.realm, this.client_id).subscribe(data => {
      this.redirectUriData = data;
    });
  }

  delete(id: string) {
    this.redirectUriService.delete(this.realm, this.client_id, id).subscribe(data => {
      console.log(data)
    });
  }

  submitForm(modal: any) {
    if (this.formGroup.valid) {
      modal.close();
      const {uri} = this.formGroup.value;
      this.redirectUriService.addNew(this.realm, this.client_id, uri).subscribe({
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
