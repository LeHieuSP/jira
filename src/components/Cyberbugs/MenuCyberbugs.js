import React from "react";
import { NavLink } from "react-router-dom";

export default function MenuCyberbugs() {
  return (
    <div className="menu">
      <div className="account">
        <div className="avatar">
          <img src={require("../../assets/img/pic4.jfif")} alt="123" />
        </div>
        <div className="account-info">
          <p>CyberLearn.vn</p>
          <p>Report bugs</p>
        </div>
      </div>
      <div className="control">
        <div>
          <i className="fa fa-credit-card" />
          <NavLink
            className="text-dark"
            activeStyle={{ color: "blue" }}
            to="/cyberbugs"
            activeClassName="active font-weight-bold text-primary"
          >
            Cyber Board
          </NavLink>
        </div>
        <div>
          <i className="fa fa-cog " />
          <NavLink
            className="text-dark"
            activeStyle={{ color: "blue" }}
            to="/projectmanagement"
            activeClassName="active font-weight-bold  text-primary"
          >
            Project Management
          </NavLink>
        </div>
        <div>
          <i className="fa fa-cog" />
          <NavLink
            className="text-dark"
            activeStyle={{ color: "blue" }}
            to="/createproject"
            activeClassName="active font-weight-bold  text-primary"
          >
            Create Project
          </NavLink>
        </div>
      </div>
      <div className="feature">
        <div>
          <i className="fa fa-truck" />
          <span>Releases</span>
        </div>
        <div>
          <i className="fa fa-equals" />
          <span>Issues and Filters</span>
        </div>
        <div>
          <i className="fa fa-paste" />
          <span>Pages</span>
        </div>
        <div>
          <i className="fa fa-location-arrow" />
          <span>Reports</span>
        </div>
        <div>
          <i className="fa fa-box" />
          <span>Components</span>
        </div>
      </div>
    </div>
  );
}