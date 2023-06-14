import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  @Input() drawer: any;

  constructor() {}

  ngOnInit(): void {}
}
