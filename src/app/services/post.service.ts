import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()

export class PostServices {
  constructor(private http: Http){}

  // UserProfile() {
  //   let url: string = 'https://reqres.in/api/users';
  //   return this.http.post( url, {job: 'Developer', city: 'Pune' })
  //   .map((res: Response) => res.json())
  //   .catch(this._errorHandler);
  // }
  //
  // private _errorHandler(error: Response){
  //   console.error(error);
  //   return Observable.throw(error || 'Error from Server Side Occcured')
  // }
}
