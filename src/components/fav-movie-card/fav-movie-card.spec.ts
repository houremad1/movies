import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavMovieCard } from './fav-movie-card';

describe('FavMovieCard', () => {
  let component: FavMovieCard;
  let fixture: ComponentFixture<FavMovieCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavMovieCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavMovieCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
