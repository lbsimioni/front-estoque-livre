import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/alert/alert.service';
import { Merchandise } from 'src/app/merchandise/merchandise.model';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
})
export class StockFormComponent implements OnInit {
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
      message: 'Movimentação de estoque inserida com sucesso',
    });
    this.form.reset();
  }

  private initForm() {
    this.form = new FormGroup({
      mercadoria: new FormControl(''),
      quantidade: new FormControl(''),
      tipo: new FormControl(''),
      fornecedor: new FormControl(''),
    });
  }
}
