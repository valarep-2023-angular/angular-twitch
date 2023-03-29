import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadClipByIdComponent } from './load-clip-by-id.component';

describe('LoadClipByIdComponent', () => {
  let component: LoadClipByIdComponent;
  let fixture: ComponentFixture<LoadClipByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadClipByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadClipByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
