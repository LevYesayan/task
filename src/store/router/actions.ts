import { createActions } from "redux-actions";
import { SWITCH_ROUTE, SWITCH_ROUTE_IN_STATE } from "./constants";

export const { switchRoute, switchRouteInState } = createActions({
  [SWITCH_ROUTE]: (payload: string) => payload,
  [SWITCH_ROUTE_IN_STATE]: (payload: string) => payload,
});
