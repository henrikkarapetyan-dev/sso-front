import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-edit-user-attributes',
  templateUrl: './edit-user-attributes.component.html',
  styleUrls: ['./edit-user-attributes.component.scss']
})
export class EditUserAttributesComponent implements OnInit {
  @Input() user_id!: string;
  @Input() realm!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
