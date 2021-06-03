import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasboardComponent } from './tasboard.component';

describe('TasboardComponent', () => {
  let component: TasboardComponent;
  let fixture: ComponentFixture<TasboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
