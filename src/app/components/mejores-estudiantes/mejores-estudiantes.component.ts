import { Estudiante } from './../../models/estudiante';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MejoresEstudiantesService } from './../../services/mejores-estudiantes.service';
import * as faker from 'faker'

@Component({
  selector: 'app-mejores-estudiantes',
  templateUrl: './mejores-estudiantes.component.html',
  styleUrls: ['./mejores-estudiantes.component.css']
})
export class MejoresEstudiantesComponent implements OnInit {

  resp: any; 
  cant_estudianes: number;
  estudiantes: Estudiante[];

  constructor(
    private formBuilder: FormBuilder,  
    private mejoresEstudiantesService: MejoresEstudiantesService    
  ){
    this.cant_estudianes = 15;
    this.estudiantes =  [];    
  }

  ngOnInit() {  
    this.crearEstudiantes();  
  }

  crearEstudiantes(){
    this.estudiantes =  [];
    for (let i = 0; i<this.cant_estudianes; i++){
      let est:Estudiante = {
        cedula:faker.random.number({min:1001, max:9999}).toString(),
        nombre:faker.name.findName(),
        apellido:faker.name.lastName(),
        edad:faker.random.number({min:15, max:99}),
        nota:faker.random.number({min:0.0, max:5.0, precision: 0.1})
      };
      this.estudiantes.push(est);
    }
  }

  filtrar10(){
    this.estudiantes.sort(function (a, b) {
      if (a.nota > b.nota) {
        return -1;
      }
      if (a.nota < b.nota) {
        return 1;
      }
      // a must be equal to b
      return 0;
    });
    this.estudiantes = this.estudiantes.slice(0,10);
  }

  filtrar5back(){
    this.mejoresEstudiantesService.masJovenes(this.estudiantes).subscribe((res) => {
      console.log(res);
      this.resp = res;  
      this.estudiantes = this.resp.estudiantes;
    });
  }
}
