import { Estudiante } from './../models/estudiante';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MejoresEstudiantesService {

  private URL_API = "http://localhost:3000/tallerPDS/mejores-estudiantes";

  constructor(private http: HttpClient) {}  

  masJovenes(estudiantes: Estudiante[]){  
    console.log("estsAnG",estudiantes);
    return this.http.post(this.URL_API, estudiantes);
  }
}
