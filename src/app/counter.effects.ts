import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of,switchMap } from 'rxjs';

import * as counterActions from './counter.actions';

@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions) { }


  loadData$ = createEffect(() => this.actions$.pipe(
    ofType(counterActions.loadData),
    switchMap(() => {
      console.log("YEP");
      return of(counterActions.loadDataSuccess());
    })
  ));
}

