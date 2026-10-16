const groups = [
  { name: "Family Circle", members: "8 members", next: "Oct 24", color: "sage" },
  { name: "Weekend Friends", members: "10 members", next: "Oct 28", color: "peach" },
  { name: "Office Seettu", members: "6 members", next: "Nov 02", color: "blue" },
];

const activity = [
  { initials: "NP", name: "Nimali Perera", group: "Family Circle", date: "Today, 9:42 AM", amount: "LKR 5,000", status: "Confirmed" },
  { initials: "DM", name: "Dilan Madushanka", group: "Weekend Friends", date: "Yesterday", amount: "LKR 3,000", status: "Pending" },
  { initials: "SK", name: "Sahan Kumara", group: "Office Seettu", date: "Oct 13, 2026", amount: "LKR 10,000", status: "Confirmed" },
];

function Icon({ name }) {
  const paths = {
    overview: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /></>,
    groups: <><circle cx="9" cy="8" r="3" /><path d="M3 20v-1a6 6 0 0 1 12 0v1" /><path d="M16 5.5a3 3 0 0 1 0 5.8M18 14a5 5 0 0 1 3 4.6V20" /></>,
    activity: <><path d="M3 12h4l3-8 4 16 3-8h4" /></>,
    reports: <><path d="M4 19V5M4 19h17" /><path d="m7 15 4-4 3 2 6-7" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M10 21h4" /></>,
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    plus: <><path d="M12 5v14M5 12h14" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></>,
    dots: <><circle cx="5" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /></>,
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}

function Sidebar() {
  const links = [
    { label: "Overview", icon: "overview", current: true },
    { label: "My groups", icon: "groups" },
    { label: "Contributions", icon: "activity" },
    { label: "Reports", icon: "reports" },
  ];

  return (
    <aside className="sidebar">
      <a className="brand" href="#overview" aria-label="Digital Seettu home">
        <span className="brand-mark">S</span>
        <span>seettu<span className="brand-period">.</span></span>
      </a>

      <div className="workspace-label">WORKSPACE</div>
      <nav className="side-nav" aria-label="Main navigation">
        {links.map((link) => (
          <a className={`nav-link${link.current ? " is-current" : ""}`} href="#overview" key={link.label} aria-current={link.current ? "page" : undefined}>
            <Icon name={link.icon} />
            <span>{link.label}</span>
            {link.label === "My groups" && <span className="nav-count">3</span>}
          </a>
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

function StatCard({ label, value, note, icon, tone }) {
  return (
    <article className="stat-card">
      <div className={`stat-icon ${tone}`}><Icon name={icon} /></div>
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
      <div className="stat-note">{note}</div>
    </article>
  );
}

function App() {
  return (
    <div className="app-shell" id="overview">
      <Sidebar />
      <main className="main-content">
        <header className="topbar">
          <div className="breadcrumb"><span>Workspace</span><span className="breadcrumb-slash">/</span><strong>Overview</strong></div>
          <div className="topbar-actions">
            <span className="demo-badge"><span /> Sample dashboard</span>
            <button className="icon-button search-button" type="button" aria-label="Search"><Icon name="search" /></button>
            <button className="icon-button notification-button" type="button" aria-label="Notifications"><Icon name="bell" /><span className="notification-dot" /></button>
          </div>
        </header>

        <div className="page-content">
          <section className="welcome-row">
            <div>
              <div className="eyebrow">FRIDAY, OCTOBER 16, 2026</div>
              <h1>Good morning, Kavindu <span className="wave" aria-hidden="true">✳</span></h1>
              <p className="welcome-copy">Here’s what’s happening with your Seettu today.</p>
            </div>
            <button className="primary-button" type="button"><Icon name="plus" /> Create a group</button>
          </section>

          <section className="stats-grid" aria-label="Your Seettu summary">
            <StatCard label="Active groups" value="03" note={<><span className="note-accent">All on track</span> this month</>} icon="groups" tone="green" />
            <StatCard label="Contributed so far" value="LKR 24,000" note={<>Across <span className="note-accent">3 active groups</span></>} icon="activity" tone="lavender" />
            <StatCard label="Next contribution" value="LKR 5,000" note={<><span className="note-accent">Due in 8 days</span> · Family Circle</>} icon="calendar" tone="orange" />
          </section>

          <section className="content-grid">
            <div className="panel groups-panel">
              <div className="panel-heading">
                <div><h2>Your groups</h2><p>Keep up with the circles you’re part of.</p></div>
                <button className="text-button" type="button">View all <Icon name="arrow" /></button>
              </div>
              <div className="group-list">
                {groups.map((group, index) => (
                  <article className="group-row" key={group.name}>
                    <div className={`group-avatar ${group.color}`}>{group.name.split(" ").map((word) => word[0]).join("")}</div>
                    <div className="group-details"><strong>{group.name}</strong><span>{group.members} <span className="detail-separator">·</span> Member</span></div>
                    <div className="group-next"><span>Next contribution</span><strong>{group.next}</strong></div>
                    <span className={`group-status status-${index === 1 ? "pending" : "good"}`}>{index === 1 ? "Due soon" : "On track"}</span>
                    <button className="row-more" type="button" aria-label={`More options for ${group.name}`}><Icon name="dots" /></button>
                  </article>
                ))}
              </div>
              <button className="all-groups-link" type="button">Explore group activity <Icon name="arrow" /></button>
            </div>

            <aside className="panel next-panel">
              <div className="next-card-top"><span className="next-icon"><Icon name="calendar" /></span><span className="upcoming-label">UPCOMING</span></div>
              <h2>Your next contribution</h2>
              <p className="next-group-name">Family Circle <span>·</span> Round 04</p>
              <div className="next-amount">LKR 5,000</div>
              <div className="due-date"><span className="due-dot" /> Due Saturday, October 24</div>
              <div className="progress-track"><span /></div>
              <div className="progress-caption"><span>Round progress</span><strong>6 of 8 members confirmed</strong></div>
              <button className="secondary-button" type="button">View contribution details <Icon name="arrow" /></button>
            </aside>
          </section>

          <section className="panel activity-panel">
            <div className="panel-heading">
              <div><h2>Recent activity</h2><p>The latest updates from your groups.</p></div>
              <button className="filter-button" type="button"><Icon name="calendar" /> Last 7 days <span className="filter-chevron">⌄</span></button>
            </div>
            <div className="activity-table-wrap">
              <table>
                <thead><tr><th>MEMBER</th><th>GROUP</th><th>DATE</th><th>AMOUNT</th><th>STATUS</th><th><span className="visually-hidden">Actions</span></th></tr></thead>
                <tbody>
                  {activity.map((item) => (
                    <tr key={`${item.name}-${item.date}`}>
                      <td><span className="member-cell"><span className={`avatar avatar-${item.initials.toLowerCase()}`}>{item.initials}</span><strong>{item.name}</strong></span></td>
                      <td className="table-muted">{item.group}</td>
                      <td className="table-muted">{item.date}</td>
                      <td className="amount-cell">{item.amount}</td>
                      <td><span className={`activity-status ${item.status === "Pending" ? "activity-pending" : "activity-confirmed"}`}><span />{item.status}</span></td>
                      <td><button className="row-more" type="button" aria-label={`More options for ${item.name}'s contribution`}><Icon name="dots" /></button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="activity-footer" type="button">View all activity <Icon name="arrow" /></button>
          </section>

          <footer className="page-footer"><span>Digital Seettu</span><span>This is a visual sample with fictional data. No payments are processed.</span></footer>
        </div>
      </main>
    </div>
  );
}

export default App;
