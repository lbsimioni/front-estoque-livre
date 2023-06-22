import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Merchandise } from '../merchandise.model';

@Component({
  selector: 'app-merchandise-form',
  templateUrl: './merchandise-form.component.html',
})
export class MerchandiseFormComponent implements OnInit {
  form: FormGroup;
  edit: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initForm();

    this.route.data.subscribe((data: any) => {
      const merchandise: Merchandise = data['merchandise'];
      this.form.patchValue(merchandise);
      if (merchandise) this.edit = true;
    });
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
