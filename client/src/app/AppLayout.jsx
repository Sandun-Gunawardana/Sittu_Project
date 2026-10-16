import { Outlet, useLocation } from "react-router-dom";
import { Icon } from "../components/Icon.jsx";
import { Sidebar } from "../components/Sidebar.jsx";

const pageTitles = {
  "/": "Overview",
  "/groups": "My groups",
  "/contributions": "Contributions",
  "/reports": "Reports",
};

export default function AppLayout() {
  const { pathname } = useLocation();

  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-content">
        <header className="topbar">
          <div className="breadcrumb"><span>Workspace</span><span className="breadcrumb-slash">/</span><strong>{pageTitles[pathname] ?? (pathname.startsWith("/groups/") ? "Group details" : "Not found")}</strong></div>
          <div className="topbar-actions">
            <span className="demo-badge"><span /> Sample dashboard</span>
            <button className="icon-button search-button" type="button" aria-label="Search"><Icon name="search" /></button>
            <button className="icon-button notification-button" type="button" aria-label="Notifications"><Icon name="bell" /><span className="notification-dot" /></button>
          </div>
        </header>
        <Outlet />
      </main>
    </div>
  );
}
