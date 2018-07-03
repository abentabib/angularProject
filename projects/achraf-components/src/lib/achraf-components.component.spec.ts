import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchrafComponentsComponent } from './achraf-components.component';

describe('AchrafComponentsComponent', () => {
  let component: AchrafComponentsComponent;
  let fixture: ComponentFixture<AchrafComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchrafComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchrafComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
