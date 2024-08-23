import { createReducer, on } from "@ngrx/store";
import { decrement, decrementBy, increment, incrementBy, reset, undo } from "./counter.action";

export interface CounterState {
    count: number;
  }
  
  export const initialState: CounterState = {
    count: 0,
  };
  
  export const counterReducer = createReducer(
    initialState,
    on(increment, (state) => ({
      ...state,
      count: saveToLocalStorage(state.count + 1) 
    })),
    on(decrement, (state) => ({
      ...state,
      count: saveToLocalStorage(state.count > 0 ? state.count - 1 : 0) 
    })),
    on(reset, (state) => ({
      ...state,
      count: saveToLocalStorage(0) 
    })),
    on(incrementBy, (state, { value }) => ({
      ...state,
      count: saveToLocalStorage(state.count + value) 
    })),
    on(decrementBy, (state, { value }) => ({
      ...state,
      count: saveToLocalStorage(state.count >= value ? state.count - value : 0) 
    })),
    on(undo, (state) => ({
      ...state,
      count: undoFromLocalStorage(state.count) 
    }))
  );
  
  
  function saveToLocalStorage(newCount: number): number {
    let history = JSON.parse(localStorage.getItem('counterHistory') || '[]');
    history.push(newCount);
    localStorage.setItem('counterHistory', JSON.stringify(history));
    return newCount;
  }
  
 
  function undoFromLocalStorage(currentCount: number): number {
    let history = JSON.parse(localStorage.getItem('counterHistory') || '[]');
    history.pop();
    const previousCount = history.length > 0 ? history[history.length - 1] : 0;
    localStorage.setItem('counterHistory', JSON.stringify(history));
    return previousCount;
  }
