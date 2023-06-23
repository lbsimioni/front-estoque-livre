import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/alert/alert.service';
import { Merchandise } from 'src/app/merchandise/merchandise.model';

@Component({
  selector: 'app-price-form',
  templateUrl: './price-form.component.html',
})
export class PriceFormComponent implements OnInit {
  form: FormGroup;

  merchandises: Merchandise[] = [];

  constructor(private route: ActivatedRoute, private alert: AlertService) {}

  ngOnInit(): void {
    this.initForm();

    this.route.data.subscribe((data: any) => {
      this.merchandises = data['merchandises'];
    });
  }

  submit(): void {
    this.alert.addAlert({
      level: 'success',
      message: 'Tabela de preço inserida com sucesso',
    });
    this.form.reset();
  }

  private initForm() {
    this.form = new FormGroup({
      mercadoria: new FormControl(''),
      valor: new FormControl(''),
      promocao: new FormControl(''),
      dataInc: new FormControl(''),
      dataFim: new FormControl(''),
    });
  }
}
