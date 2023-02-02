import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiohomeComponent } from './biohome.component';

describe('BiohomeComponent', () => {
  let component: BiohomeComponent;
  let fixture: ComponentFixture<BiohomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiohomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiohomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
