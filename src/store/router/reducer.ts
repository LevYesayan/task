import { handleActions } from "redux-actions";

import { SWITCH_ROUTE_IN_STATE } from "./constants";
import { routeInitial } from "./initialState";

export default handleActions(
  {
    [SWITCH_ROUTE_IN_STATE]: (
      state: object,
      { payload }: { payload: string }
    ) => ({
      ...state,
      currentRoute: payload,
    }),
  },
  routeInitial
);
