import { Link, NavLink } from "react-router-dom";
import { Icon } from "./Icon.jsx";

export function Sidebar() {
  const links = [
    { label: "Overview", icon: "overview", to: "/" },
    { label: "My groups", icon: "groups", to: "/groups" },
    { label: "Contributions", icon: "activity", to: "/contributions" },
    { label: "Reports", icon: "reports", to: "/reports" },
  ];

  return (
    <aside className="sidebar">
      <Link className="brand" to="/" aria-label="Digital Seettu home">
        <span className="brand-mark">S</span>
        <span>seettu<span className="brand-period">.</span></span>
      </Link>

      <div className="workspace-label">WORKSPACE</div>
      <nav className="side-nav" aria-label="Main navigation">
        {links.map((link) => (
          <NavLink className={({ isActive }) => `nav-link${isActive ? " is-current" : ""}`} to={link.to} end={link.to === "/"} aria-label={link.label} key={link.label}>
            <Icon name={link.icon} />
            <span>{link.label}</span>
            {link.label === "My groups" && <span className="nav-count">3</span>}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="help-card">
          <span className="help-mark">?</span>
          <div>
            <strong>Need a hand?</strong>
            <span>Learn how Seettu works</span>
          </div>
          <Icon name="arrow" />
        </div>
        <button className="profile-button" type="button">
          <span className="avatar avatar-user">KA</span>
          <span className="profile-copy"><strong>Kavindu Amarasinghe</strong><span>Member account</span></span>
          <Icon name="dots" />
        </button>
      </div>
    </aside>
  );
}
