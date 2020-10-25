import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TablaMultService } from './../../services/tabla-mult.service';


@Component({
  selector: 'app-tabla-mult',
  templateUrl: './tabla-mult.component.html',
  styleUrls: ['./tabla-mult.component.css']
})
export class TablaMultComponent implements OnInit {

  form: FormGroup;
  resp: any;

  constructor(
    private formBuilder: FormBuilder,    
    private tablaMultService: TablaMultService   
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({             
        num: ['', Validators.required]       
    });
  }

  onSubmit() {
    console.log(this.form.value);

    if(this.form.invalid) {
      console.log('Revisar Formulario para multiplicar');
      return;
    }
    this.tablaMultService.mult(this.form.value).subscribe((res) => {
      console.log(res);
      this.resp = res;
    });
  }

}
