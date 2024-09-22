import { useState } from "react";
import { Container, WrapperContainer } from "./Container";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const [isCollapse, setCollapse] = useState(window.innerWidth <= 575.98);
  return (
    <WrapperContainer
      className={`sidebar ${
        isCollapse ? "sidebar-collapse" : ""
      } sidebar-bg ph-xs`}
    >
      <Container
        className="ph-xs primary-border"
        styleProps={{
          alignItems: "center",
          marginTop: "0.5rem",
          marginBottom: "0.5rem",
        }}
      >
        <div
          className={`primary-font ${
            !isCollapse ? "show-visibility" : "hide-visibility"
          }`}
        >
          Examples
        </div>
        <div
          title="Collapse"
          className={`collapse ${isCollapse ? "collapse-transform" : ""}`}
          onClick={() => setCollapse((prevState) => !prevState)}
        >
          <i className="fa-solid fa-chevron-left fs-lg" />
        </div>
      </Container>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        <Container
          className={`p-sm secondary-font fs-sm list-item ${
            isCollapse ? "list-item-collapse" : ""
          }`}
          styleProps={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <div
            className={`sidebar-label ${
              !isCollapse ? "show-visibility" : "hide-visibility"
            }`}
          >
            To-Do List
          </div>
          <div className="list-icon">
            <i title="To-Do List" className="fa-solid fa-list" />
          </div>
        </Container>
      </NavLink>
      <NavLink
        to="/coming-soon"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        <Container
          className={`p-sm secondary-font fs-sm list-item ${
            isCollapse ? "list-item-collapse" : ""
          }`}
          styleProps={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <div
            className={`sidebar-label ${
              !isCollapse ? "show-visibility" : "hide-visibility"
            }`}
          >
            Coming soon...
          </div>
          <div className="list-icon">
            <i className="fa-solid fa-plus" title="Coming Soon" />
          </div>
        </Container>
      </NavLink>
    </WrapperContainer>
  );
};
