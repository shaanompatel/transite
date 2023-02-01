import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemhomeComponent } from './chemhome.component';

describe('ChemhomeComponent', () => {
  let component: ChemhomeComponent;
  let fixture: ComponentFixture<ChemhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChemhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChemhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
