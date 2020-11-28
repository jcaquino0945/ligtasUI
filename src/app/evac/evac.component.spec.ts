import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvacComponent } from './evac.component';

describe('EvacComponent', () => {
  let component: EvacComponent;
  let fixture: ComponentFixture<EvacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
