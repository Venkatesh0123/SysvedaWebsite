import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentgooglemapComponent } from './componentgooglemap.component';

describe('ComponentgooglemapComponent', () => {
  let component: ComponentgooglemapComponent;
  let fixture: ComponentFixture<ComponentgooglemapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentgooglemapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentgooglemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
