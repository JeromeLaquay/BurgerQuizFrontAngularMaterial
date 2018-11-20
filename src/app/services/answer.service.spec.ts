import { TestBed, inject } from '@angular/core/testing';
import {} from 'jasmine';
import { AnswerService } from './answer.service';

describe('AnswerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnswerService]
    });
  });

  it('should be created', inject([AnswerService], (service: AnswerService) => {
    expect(service).toBeTruthy();
  }));
});
