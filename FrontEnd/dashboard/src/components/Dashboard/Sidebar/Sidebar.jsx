import { NavLink } from "react-router-dom";
import React from "react";
import styles from "./Sidebar.module.css";

function Sidebar({ draftPage }) {
  const links = [
    { icon: "fa-chart-bar", title: "Status", path: "/", page: "" },
    { icon: "fa-users", title: "USER MANAGEMENT", path: "/users", page: "users" },
    { icon: "fa-building", title: "PROJECTS MANAGEMENT", path: "/projects", page: "projects" },
    { icon: "fa-building", title: "DEVELOPERS MANAGEMENT", path: "/developer", page: "developer" },
    { icon: "fa-users", title: "CMS", path: "/cms", page: "cms" },
    { icon: "fa-message", title: "LIVE CHAT", path: "/livechat", page: "livechat" },
  ];

  return (
    <aside className={`${styles.sidebar} min-vh-100 py-4`}>
      <div className="fw-semibold px-4 mb-3 fs-4">Dashboard</div>

      <nav>
        {links.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={`${styles.navItem} d-flex align-items-center gap-3 py-3 px-4`}
          >
            <i className={`fa-solid ${item.icon}`}></i>

            <span>
              {item.title}

              {draftPage === item.page && item.page !== "" && (
                <span className="badge bg-secondary ms-2">
                  Draft
                </span>
              )}
            </span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;