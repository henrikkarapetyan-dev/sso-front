import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-edit-client-attributes',
  templateUrl: './edit-client-attributes.component.html',
  styleUrls: ['./edit-client-attributes.component.scss']
})
export class EditClientAttributesComponent implements OnInit {

  @Input() client_id!: string;
  @Input() realm!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
