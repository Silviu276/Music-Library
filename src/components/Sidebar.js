import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SidebarData from "./SidebarData";
import SubMenu from "./Submenu";

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 16%;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  return (
    <div>
      <SidebarNav>
        <SidebarWrap>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </div>
  );
};

export default Sidebar;
