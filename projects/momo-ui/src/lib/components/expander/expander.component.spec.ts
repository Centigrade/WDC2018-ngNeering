import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ExpanderComponent } from './expander.component';

describe('ExpanderComponent', () => {
  let component: ExpanderComponent;
  let fixture: ComponentFixture<ExpanderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExpanderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should collapse the content if not expanded', () => {
    // Act.
    component.expanded = false;
    fixture.detectChanges();

    // Assert.
    const content = fixture.debugElement.query(By.css('.content'));
    expect(content).toEqual(null); // returns null if not available
  });

  test('should show the content if expanded', () => {
    // Act.
    component.expanded = true;
    fixture.detectChanges();

    // Assert.
    const content = fixture.debugElement.query(By.css('.content'));
    expect(content).toBeTruthy();
  });

  test('should render the title in the header', () => {
    // Arrange.
    const sampleTitle = 'Hello WDC';

    // Act.
    component.title = sampleTitle;
    fixture.detectChanges();

    // Assert.
    const titleText: HTMLElement = fixture.debugElement.query(By.css('.title')).nativeElement;
    expect(titleText.innerHTML).toEqual(sampleTitle);
  });

  test('should set the disabled class on the host if disabled', () => {
    // Arrange.
    const hostElement = fixture.debugElement;

    // Act.
    component.disabled = true;
    fixture.detectChanges();

    // Assert.
    expect(hostElement.classes.disabled).toBeTruthy();
  });

  test('should not set the disabled class on the host if enabled', () => {
    // Arrange.
    const hostElement = fixture.debugElement;

    // Act.
    component.disabled = false;
    fixture.detectChanges();

    // Assert.
    expect(hostElement.classes.disabled).toBeFalsy();
  });
});
