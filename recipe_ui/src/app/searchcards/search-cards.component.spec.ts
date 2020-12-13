import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCardsComponent } from './search-cards.component';

describe('SearchcardsComponent', () => {
  let component: SearchCardsComponent;
  let fixture: ComponentFixture<SearchCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
