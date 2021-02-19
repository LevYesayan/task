import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Dashboard from "./dashboard/Dashboard";
import Customers from "./customers/Customers";
import ShoppingList from "./shopping-list/ShoppingList";
import NotFound from "./not-found-404/NotFound";
import { selectCurrentRoute } from "../store/router/selector";
import { switchRouteInState } from "../store/router/actions";
import history from "../history";

const routes = {
  "/": Dashboard,
  "/customer-logo": Customers,
  "/shopping-list": ShoppingList,
};

const Router = () => {
  const currentRoute = useSelector(selectCurrentRoute);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(switchRouteInState(history.location.pathname));
  }, [history]);
  // @ts-ignore
  const Component = routes[currentRoute] || NotFound;

  return <Component />;
};

export default Router;
