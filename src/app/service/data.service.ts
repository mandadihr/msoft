import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  private apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s";

  constructor(private http: Http) {
   }

// the getMeals method returns an observable
   getMeals(): Observable<Object[]>  {
    return this.http.get(this.apiUrl)
    .map(res => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


}
