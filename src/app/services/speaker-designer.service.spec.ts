import { TestBed } from '@angular/core/testing';

import { SpeakerDesignerService } from './speaker-designer.service';

describe('SpeakerDesignerService', () => {
  let service: SpeakerDesignerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeakerDesignerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
