import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Merchandise } from '../merchandise.model';
import { AlertService } from 'src/app/alert/alert.service';

@Component({
  selector: 'app-merchandise-form',
  templateUrl: './merchandise-form.component.html',
})
export class MerchandiseFormComponent implements OnInit {
  form: FormGroup;
  edit: boolean = false;

  constructor(private route: ActivatedRoute, private alert: AlertService) {}

  ngOnInit(): void {
    this.initForm();

    this.route.data.subscribe((data: any) => {
      const merchandise: Merchandise = data['merchandise'];
      this.form.patchValue(merchandise);
      if (merchandise) this.edit = true;
    });
  }

  submit(): void {
    if (this.edit) {
      this.alert.addAlert({
        level: 'success',
        message: 'Produto alterado com sucesso!',
      });
    } else {
      this.alert.addAlert({
        level: 'success',
        message: 'Produto cadastrado com sucesso!',
      });
      this.form.reset();
    }
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
