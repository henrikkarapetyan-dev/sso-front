import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {

  private subscription: Subscription;
  private _realm!: string;

  constructor(private activateRoute: ActivatedRoute) {
    this.subscription = activateRoute.params.subscribe(params => this._realm = params['realm']);
  }

  ngOnInit(): void {
  }

  get realm(): string {
    return this._realm;
  }

  get getRealmLinks(): string {
    return environment.apiUrl + "/realms/" + this._realm + "/routes/"
  }
}
