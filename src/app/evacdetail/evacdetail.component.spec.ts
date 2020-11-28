import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvacdetailComponent } from './evacdetail.component';

describe('EvacdetailComponent', () => {
  let component: EvacdetailComponent;
  let fixture: ComponentFixture<EvacdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvacdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvacdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
