import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphContainerComponent } from './graph-container.component';
import { MockBuilder } from 'ng-mocks';
import { GraphComponent } from '../graph/graph.component';

describe('GraphContainerComponent', () => {
  let component: GraphContainerComponent;
  let fixture: ComponentFixture<GraphContainerComponent>;

  beforeEach(() => MockBuilder(GraphContainerComponent).mock(GraphComponent));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
