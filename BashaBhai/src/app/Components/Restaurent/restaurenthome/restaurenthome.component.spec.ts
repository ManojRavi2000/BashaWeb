import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurenthomeComponent } from './restaurenthome.component';

describe('RestaurenthomeComponent', () => {
  let component: RestaurenthomeComponent;
  let fixture: ComponentFixture<RestaurenthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurenthomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurenthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
