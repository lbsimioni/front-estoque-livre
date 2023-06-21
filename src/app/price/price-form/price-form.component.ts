import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-price-form',
  templateUrl: './price-form.component.html',
})
export class PriceFormComponent implements OnInit {
  form: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.initForm();
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
