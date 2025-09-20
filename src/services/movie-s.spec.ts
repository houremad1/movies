import { TestBed } from '@angular/core/testing';

import { MovieS } from './movie-s';

describe('MovieS', () => {
  let service: MovieS;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieS);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
