import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemOneComponent } from './menu-item-one.component';

describe('MenuItemOneComponent', () => {
  let component: MenuItemOneComponent;
  let fixture: ComponentFixture<MenuItemOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuItemOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
