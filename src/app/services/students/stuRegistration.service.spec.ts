import { TestBed } from '@angular/core/testing';
import { StuRegistrationService } from './stuRegistration.service';

describe('BookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StuRegistrationService = TestBed.get(StuRegistrationService);
    expect(service).toBeTruthy();
  });
});
