import { Link } from "react-router-dom";
import { Icon } from "../components/Icon.jsx";
import { StatCard } from "../components/StatCard.jsx";

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

export default function OverviewPage() {
  return (
      <div className="page-content">
        <section className="welcome-row">
          <div>
            <div className="eyebrow">FRIDAY, OCTOBER 16, 2026</div>
            <h1>Good morning, Kavindu <span className="wave" aria-hidden="true">✳</span></h1>
            <p className="welcome-copy">Here’s what’s happening with your Seettu today.</p>
          </div>
          <Link className="primary-button" to="/groups/new"><Icon name="plus" /> Create a group</Link>
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
            <p className="next-group-name">Family Circle <span>·</span> Round 03</p>
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
  );
}
