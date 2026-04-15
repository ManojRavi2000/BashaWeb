import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentitemsComponent } from './restaurentitems.component';

describe('RestaurentitemsComponent', () => {
  let component: RestaurentitemsComponent;
  let fixture: ComponentFixture<RestaurentitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurentitemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurentitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
