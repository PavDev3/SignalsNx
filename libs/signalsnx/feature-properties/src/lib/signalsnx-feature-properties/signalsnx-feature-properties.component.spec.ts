import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignalsnxFeaturePropertiesComponent } from './signalsnx-feature-properties.component';

describe('SignalsnxFeaturePropertiesComponent', () => {
  let component: SignalsnxFeaturePropertiesComponent;
  let fixture: ComponentFixture<SignalsnxFeaturePropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsnxFeaturePropertiesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalsnxFeaturePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
