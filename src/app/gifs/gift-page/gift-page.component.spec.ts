import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftPageComponent } from './gift-page.component';

describe('GiftPageComponent', () => {
  let component: GiftPageComponent;
  let fixture: ComponentFixture<GiftPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
