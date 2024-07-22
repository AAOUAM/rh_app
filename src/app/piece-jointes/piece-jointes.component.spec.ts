import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieceJointesComponent } from './piece-jointes.component';

describe('PieceJointesComponent', () => {
  let component: PieceJointesComponent;
  let fixture: ComponentFixture<PieceJointesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PieceJointesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PieceJointesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
