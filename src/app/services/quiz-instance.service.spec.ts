import { TestBed, inject } from '@angular/core/testing';
import {} from 'jasmine';
import { QuizInstanceService } from './quiz-instance.service';

describe('QuizService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizInstanceService]
    });
  });

  it('should be created', inject([QuizInstanceService], (service: QuizInstanceService) => {
    expect(service).toBeTruthy();
  }));
});
