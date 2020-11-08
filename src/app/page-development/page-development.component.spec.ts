import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDevelopmentComponent } from './page-development.component';

describe('PageDevelopmentComponent', () => {
  let component: PageDevelopmentComponent;
  let fixture: ComponentFixture<PageDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
