import { Patineta } from './../models/patineta';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlmacenDeporteService {

  private URL_API = "http://localhost:3000/tallerPDS/almacen-deporte";

  constructor(private http: HttpClient) {}  

  calcTotal(patinetas: Patineta[]){      
    return this.http.post(this.URL_API, patinetas);
  }
}
