import { Component, OnInit } from '@angular/core';
import { PubsService } from '../../services/pubs.service';
import { TownsService } from '../../services/towns.service';
import { pubs } from '../../interface/pub';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';


@Component({
  selector: 'app-pubs',
  templateUrl: './pubs.component.html',
  styleUrls: ['./pubs.component.scss']
})
export class PubsComponent implements OnInit {
  public pubsList;
  public townsList;
  public selectedTown: string;
  subscription: Subscription;
  constructor(private pubService: PubsService, private townService: TownsService, private router: ActivatedRoute, private router1: Router) {

    // this.router.queryParams.subscribe((data) => {
    //   this.selectedTown = data['town'];
    // });

    this.pubService.getPubs().subscribe(result => this.pubsList = result);
    this.townService.getTowns().subscribe(result => this.townsList = result);
  }

  townClicked($event) {
    // this.pubService.selectedTown = $event;
    // console.log('selected Town:', this.pubService.selectedTown);
    this.router1.navigate(['/pubs'], { queryParams: { town: $event } });
    this.router.queryParams
      .filter(params => params.town)
      .subscribe(params => {
        // console.log('params: ',params); //

        this.pubService.selectedTown = params.town;
        console.log(this.pubService.selectedTown); // popular
      });
  }

  ngOnInit() {
  }

}
