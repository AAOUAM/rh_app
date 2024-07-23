import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilialInformationComponent } from './familial-information.component';

describe('FamilialInformationComponent', () => {
  let component: FamilialInformationComponent;
  let fixture: ComponentFixture<FamilialInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FamilialInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FamilialInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
