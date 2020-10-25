import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TablaMultService {
 
  private URL_API = "http://localhost:3000/tallerPDS/tablamult";

  constructor(private http: HttpClient) {

  }

  mult(num: number){
    return this.http.post(this.URL_API, num);
  }

}
