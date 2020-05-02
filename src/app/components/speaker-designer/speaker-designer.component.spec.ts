import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerDesignerComponent } from './speaker-designer.component';

describe('SpeakerDesignerComponent', () => {
  let component: SpeakerDesignerComponent;
  let fixture: ComponentFixture<SpeakerDesignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerDesignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
