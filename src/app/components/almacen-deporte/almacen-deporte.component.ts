import { Patineta } from './../../models/patineta';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AlmacenDeporteService } from './../../services/almacen-deporte.service';
import * as faker from 'faker'

@Component({
  selector: 'app-almacen-deporte',
  templateUrl: './almacen-deporte.component.html',
  styleUrls: ['./almacen-deporte.component.css']
})
export class AlmacenDeporteComponent implements OnInit {

  resp: any;
  total: number;
  patinetas: Patineta[];

  constructor(
    private almacenDeporteService: AlmacenDeporteService
  ) 
  { 
    this.patinetas = [];
  }

  ngOnInit() {
    this.crearPatinetas();
  }

  crearPatinetas(){
    this.patinetas =  [];
    for (let i = 0; i<5; i++){
      let pat:Patineta = {
        tipo_material:faker.commerce.productMaterial(),
        velocidad:faker.random.number({min:25, max:60}),
        ancho:faker.random.number({min:30, max:70}),
        alto:faker.random.number({min:30, max:70}),
        color:faker.commerce.color(),
        precio:faker.random.number({min:50.0, max:289.0, precision: 0.1})
      };
      this.patinetas.push(pat);
    }
  }

  calcTotal(){
    this.almacenDeporteService.calcTotal(this.patinetas).subscribe((res) => {
      console.log(res);
      this.resp = res;  
      this.total = this.resp.valorTotal;
    });
  }
}
