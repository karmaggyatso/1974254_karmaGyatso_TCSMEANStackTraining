import { TestBed } from '@angular/core/testing';

import { QuizService } from './quizService.service';

describe('QuizServiceService', () => {
  let service: QuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
