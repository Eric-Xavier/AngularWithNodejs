import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMenuComponent } from './menu.component';

describe('MenuComponentComponent', () => {
  let component: AppMenuComponent;
  let fixture: ComponentFixture<AppMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppMenuComponent]
    });
    fixture = TestBed.createComponent(AppMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
