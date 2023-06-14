import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchandiseFormComponent } from './merchandise-form.component';

describe('MerchandiseFormComponent', () => {
  let component: MerchandiseFormComponent;
  let fixture: ComponentFixture<MerchandiseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchandiseFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchandiseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
