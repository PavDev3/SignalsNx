import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignalsnxFeatureCounterComponent } from './signalsnx-feature-counter.component';

describe('SignalsnxFeatureCounterComponent', () => {
  let component: SignalsnxFeatureCounterComponent;
  let fixture: ComponentFixture<SignalsnxFeatureCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsnxFeatureCounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalsnxFeatureCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
