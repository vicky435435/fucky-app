import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntrosPage } from './intros.page';

describe('IntrosPage', () => {
  let component: IntrosPage;
  let fixture: ComponentFixture<IntrosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IntrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
