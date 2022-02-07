import { hot } from 'jasmine-marbles';
import * as fromEffects from './counter.effects';
import * as fromActions from './counter.actions';
import { Actions } from '@ngrx/effects';

fdescribe('CounterEffects', () => {
  describe('loadData$', () => {
    it('should return a success action with a list of people', () => {
      const actions = new Actions(
        hot('-a--', {
          a: fromActions.loadData(),
        })
      );
      const effects = new fromEffects.CounterEffects(actions);
      const expected = hot('-a--', {
        a: fromActions.loadDataSuccess(),
      });

      expect(effects.loadData$).toBeObservable(expected);
    });
  });
});
