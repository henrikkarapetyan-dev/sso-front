import {Component, OnInit} from '@angular/core';
import {GlobalStateService} from "../../../../_services/global-state.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {RealmSocialNetworksService} from "../../../../_services/realm-social-networks.service";
import {RealmSocialNetworkModel} from "../../../../_models/realm-social-network.model";
import {AvailableSocialProvidersModel} from "../../../../_models/available-social-providers.model";

@Component({
  selector: 'app-realm-social-networks',
  templateUrl: './realm-social-networks.component.html',
  styleUrls: ['./realm-social-networks.component.scss']
})
export class RealmSocialNetworksComponent implements OnInit {
  public realm!: string;
  private subscription!: Subscription;
  public realmSocialNetworks!: RealmSocialNetworkModel[];
  public notConfiguredProviders!: AvailableSocialProvidersModel[];

  constructor(
    private realmSocialNetworkService: RealmSocialNetworksService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private globalStateService: GlobalStateService
  ) {
    this.subscription = activateRoute.params.subscribe(params => {
      this.globalStateService.realm = params['realm'];
      this.realm = params['realm'];
    });

  }

  ngOnInit(): void {
    this.realmSocialNetworkService.getAll().subscribe(data => {
      this.realmSocialNetworks = data;
    });

    this.realmSocialNetworkService.getNotConfiguredProviders(this.realm).subscribe(data => {
      this.notConfiguredProviders = data;
      console.log(data)
    });
  }

  delete(socialId: string) {
    this.realmSocialNetworkService.delete(this.realm, socialId).subscribe(data => {
      this.router.navigate(["/admin/" + this.realm + "/social-networks"]).then(r => {})
      console.log("deleted")
    });
  }
}
