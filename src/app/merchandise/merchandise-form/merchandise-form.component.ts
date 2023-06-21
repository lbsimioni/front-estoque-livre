import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-merchandise-form',
  templateUrl: './merchandise-form.component.html',
})
export class MerchandiseFormComponent implements OnInit {
  form: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.form = new FormGroup({
      nome: new FormControl(''),
      ncmSh: new FormControl(''),
      imagem: new FormControl(''),
      descricao: new FormControl(''),
      categoria: new FormControl(''),
      pesoLiquido: new FormControl(''),
      marca: new FormControl(''),
      pesoBruto: new FormControl(''),
      modelo: new FormControl(''),
      status: new FormControl(''),
    });
  }

  get merchandiseImage() {
    return this.form.value.imagem;
  }
}
