import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerupdatepasswordComponent } from './customerupdatepassword.component';

describe('CustomerupdatepasswordComponent', () => {
  let component: CustomerupdatepasswordComponent;
  let fixture: ComponentFixture<CustomerupdatepasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerupdatepasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerupdatepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
