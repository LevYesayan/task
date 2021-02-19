import { getSidebarItems } from "./constants";
import { useDispatch } from "react-redux";
import { switchRoute } from "../../store/router/actions";

const useSidebar = () => {
  const sidebarItems = getSidebarItems();
  const dispatch = useDispatch();
  const onClick = (path: string) => {
    dispatch(switchRoute(path));
  };

  return { sidebarItems, onClick };
};

export default useSidebar;
