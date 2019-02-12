import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pubs } from '../interface/pub';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TownsService {

  private _townurl = 'http://www.mypubspace.com/pubsmobile/towns.php';
  constructor(private http: HttpClient) { }


  getTowns(): Observable<object> {
    return this.http.get(this._townurl);
  }
  handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
