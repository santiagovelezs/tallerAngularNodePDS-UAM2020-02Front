import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BolitaService {

  private URL_API = "http://localhost:3000/tallerPDS/bolita";

  constructor(private http: HttpClient) {}  

  verificar(pos: Number){    
    return this.http.post(this.URL_API, pos);
  }
}

