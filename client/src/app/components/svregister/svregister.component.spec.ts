import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvregisterComponent } from './svregister.component';

describe('SvregisterComponent', () => {
  let component: SvregisterComponent;
  let fixture: ComponentFixture<SvregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
