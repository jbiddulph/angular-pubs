import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pubs } from '../interface/pub';
import { Observable } from 'rxjs';
import { TownsService } from './towns.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

@Injectable({
  providedIn: 'root'
})
export class PubsService {

    public selectedTown: string;

  private _pubsintownurl = 'http://www.mypubspace.com/pubsmobile/gettownpubs.php?rsTown={{this.pubService.selectedTown}}';
  private _townurl = 'http://www.mypubspace.com/pubsmobile/towns.php';
  constructor(private http: HttpClient, private townService: TownsService, private route: ActivatedRoute) { 
  }

  getPubs(): Observable<object> {
    return this.http.get(this._pubsintownurl);
  }
  handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

}
