import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');

export const loadData = createAction('[Counter] Load Data');
export const loadDataSuccess = createAction('[Counter] Load Data Success');