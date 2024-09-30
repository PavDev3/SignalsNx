import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignalsnxFeatureUserInfoComponent } from './signalsnx-feature-user-info.component';

describe('SignalsnxFeatureUserInfoComponent', () => {
  let component: SignalsnxFeatureUserInfoComponent;
  let fixture: ComponentFixture<SignalsnxFeatureUserInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsnxFeatureUserInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalsnxFeatureUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
