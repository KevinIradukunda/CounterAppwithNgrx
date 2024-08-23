import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { CounterComponent } from './counter.component';


import { CounterState } from '../../store/counter.reducer';
import { decrement, decrementBy, increment, incrementBy, reset, undo } from '../../store/counter.action';

describe('CounterComponent', () => {
  let store: MockStore<CounterState>;
  const initialState: CounterState = { count: 0 };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent],
      providers: [provideMockStore({ initialState })],
    });

    store = TestBed.inject(MockStore);
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
describe('CounterComponent', () => {
  let store: MockStore<CounterState>;
  const initialState: CounterState = { count: 0 };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent],
      providers: [provideMockStore({ initialState })],
    });

    store = TestBed.inject(MockStore);
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should display the initial count', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('0');
  });

  it('should dispatch increment action when increment button is clicked', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    const component = fixture.componentInstance;
    spyOn(store, 'dispatch');

    component.increment();

    expect(store.dispatch).toHaveBeenCalledWith(increment());
  });

  it('should dispatch decrement action when decrement button is clicked', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    const component = fixture.componentInstance;
    spyOn(store, 'dispatch');

    component.decrement();

    expect(store.dispatch).toHaveBeenCalledWith(decrement());
  });

  it('should dispatch reset action when reset button is clicked', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    const component = fixture.componentInstance;
    spyOn(store, 'dispatch');

    component.reset();

    expect(store.dispatch).toHaveBeenCalledWith(reset());
  });

  it('should dispatch incrementBy action with the correct value', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    const component = fixture.componentInstance;
    spyOn(store, 'dispatch');

    component.incrementValue = 5;
    component.incrementBy();

    expect(store.dispatch).toHaveBeenCalledWith(incrementBy({ value: 5 }));
  });

  it('should dispatch decrementBy action with the correct value', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    const component = fixture.componentInstance;
    spyOn(store, 'dispatch');

    component.decrementValue = 3;
    component.decrementBy();

    expect(store.dispatch).toHaveBeenCalledWith(decrementBy({ value: 3 }));
  });

  it('should dispatch undo action when undo button is clicked', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    const component = fixture.componentInstance;
    spyOn(store, 'dispatch');

    component.undo();

    expect(store.dispatch).toHaveBeenCalledWith(undo());
  });
})});
