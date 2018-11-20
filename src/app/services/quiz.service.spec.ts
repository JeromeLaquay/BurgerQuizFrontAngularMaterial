import { TestBed, inject } from '@angular/core/testing';
import {} from 'jasmine';
import { QuizService } from './quiz.service';

describe('QuizService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizService]
    });
  });

  it('should be created', inject([QuizService], (service: QuizService) => {
    expect(service).toBeTruthy();
  }));
});
