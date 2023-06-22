import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Merchandise } from 'src/app/merchandise/merchandise.model';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
})
export class StockFormComponent implements OnInit {
  form: FormGroup;

  merchandises: Merchandise[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initForm();

    this.route.data.subscribe((data: any) => {
      this.merchandises = data['merchandises'];
    });
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
