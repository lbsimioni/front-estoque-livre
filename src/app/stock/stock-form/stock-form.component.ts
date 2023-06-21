import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
})
export class StockFormComponent implements OnInit {
  form: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.initForm();
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
