import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNaviagtionComponent } from './sidebar-naviagtion.component';

describe('SidebarNaviagtionComponent', () => {
  let component: SidebarNaviagtionComponent;
  let fixture: ComponentFixture<SidebarNaviagtionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarNaviagtionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarNaviagtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
