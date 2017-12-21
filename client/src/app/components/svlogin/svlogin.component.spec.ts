import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvloginComponent } from './svlogin.component';

describe('SvloginComponent', () => {
  let component: SvloginComponent;
  let fixture: ComponentFixture<SvloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
