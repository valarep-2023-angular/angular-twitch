import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStreamsByGameIdComponent } from './get-streams-by-game-id.component';

describe('SmartStreamComponent', () => {
  let component: GetStreamsByGameIdComponent;
  let fixture: ComponentFixture<GetStreamsByGameIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetStreamsByGameIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetStreamsByGameIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
