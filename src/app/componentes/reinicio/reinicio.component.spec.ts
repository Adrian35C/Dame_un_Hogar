import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinicioComponent } from './reinicio.component';

describe('ReinicioComponent', () => {
  let component: ReinicioComponent;
  let fixture: ComponentFixture<ReinicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReinicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReinicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
