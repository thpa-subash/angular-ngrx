import { createAction } from "@ngrx/store";

export const incrementAction = createAction(
    '[Counter] Increment',
    
  );
  export const decrementAction = createAction(
    '[Counter] Decrement',
    
  );
  export const resetAction = createAction(
    '[Counter] Reset',
    
  );