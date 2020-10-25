import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BolitaService } from './../../services/bolita.service';

@Component({
  selector: 'app-juego-bolita',
  templateUrl: './juego-bolita.component.html',
  styleUrls: ['./juego-bolita.component.css']
})
export class JuegoBolitaComponent implements OnInit {

  form: FormGroup;
  resp: any; 
  sel: number;
  puntaje: number;
  intentos: number;

  constructor(   
    private formBuilder: FormBuilder,  
    private bolitaService: BolitaService    
  ){ 
      this.intentos = 0;
      this.puntaje = 0;
   }

  ngOnInit() {
    this.form = this.formBuilder.group({             
        pos: ['', Validators.required]       
    });
  }

  onSubmit() { 
    this.form.value.pos = this.sel  
    console.log(this.form.value) 
    this.bolitaService.verificar(this.form.value).subscribe((res) => {
      console.log(res);
      this.resp = res;
      if(this.resp.isOk)
        this.puntaje++;
    });
    this.intentos++;
  }
 

  reset(){
    this.form.reset;
    this.resp = null;        
  }

  select(pos: number){
    this.sel = pos;
    this.onSubmit()    
  }
}

