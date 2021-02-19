import React from "react";
import "antd/dist/antd.css";
import { Menu, Layout } from "antd";

import "./Sidebar.scss";
import useSidebar from "./useSidebar";
import history from "../../history";

const { Sider } = Layout;

const Sidebar = () => {
  const { sidebarItems, onClick } = useSidebar();

  return (
    <div className="sidebar">
      <Sider style={{ minWidth: "160px", maxWidth: "160px", width: "160px" }}>
        <Menu theme="light" mode="inline">
          {sidebarItems.map(({ path, icon }) => (
            <Menu.Item
              key={path}
              onClick={() => {
                onClick(path);
              }}
            >
              <img src={icon} alt="sidebar icon" />
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
    </div>
  );
};

export default Sidebar;
