import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentheaderComponent } from './restaurentheader.component';

describe('RestaurentheaderComponent', () => {
  let component: RestaurentheaderComponent;
  let fixture: ComponentFixture<RestaurentheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurentheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurentheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
