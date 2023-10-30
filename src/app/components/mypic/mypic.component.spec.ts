import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypicComponent } from './mypic.component';

describe('MypicComponent', () => {
  let component: MypicComponent;
  let fixture: ComponentFixture<MypicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MypicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MypicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
