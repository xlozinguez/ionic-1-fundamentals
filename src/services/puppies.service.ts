import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Injectable()
export class PuppiesService {
  constructor(public http: Http){}

  getPuppies(){
    return this.http.get("./assets/puppies/puppies.json").map((res:any) => res.json());
  }
}