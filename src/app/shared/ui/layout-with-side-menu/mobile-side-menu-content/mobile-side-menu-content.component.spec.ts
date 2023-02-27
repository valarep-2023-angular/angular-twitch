import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSideMenuContentComponent } from './mobile-side-menu-content.component';

describe('MobileSideMenuContentComponent', () => {
  let component: MobileSideMenuContentComponent;
  let fixture: ComponentFixture<MobileSideMenuContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileSideMenuContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileSideMenuContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
