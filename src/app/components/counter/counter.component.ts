import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterState } from '../../store/counter.reducer';
import { selectCount } from '../../store/counter.selector';
import { decrement, decrementBy, increment, incrementBy, reset, undo } from '../../store/counter.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count$: Observable<number>;
  incrementValue: number = 0;
  decrementValue: number = 0;

  constructor(private store: Store) {
    this.count$ = this.store.select(selectCount);
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  incrementBy() {
    if (this.incrementValue > 0) {
      this.store.dispatch(incrementBy({ value: this.incrementValue }));
    }
  }

  decrementBy() {
    if (this.decrementValue > 0) {
      this.store.dispatch(decrementBy({ value: this.decrementValue }));
    }
  }

  undo() {
    this.store.dispatch(undo());
  }
}

