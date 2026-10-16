import { Link } from "react-router-dom";
import { Icon } from "../components/Icon.jsx";
import { initialsOf, mockGroups } from "../services/mockGroups.js";

export default function GroupsPage() {
  return (
    <div className="page-content">
      <section className="welcome-row">
        <div>
          <div className="eyebrow">YOUR CIRCLES</div>
          <h1>My groups</h1>
          <p className="welcome-copy">Seettu groups you organise or belong to.</p>
        </div>
      </section>

      <section className="panel groups-panel" aria-label="Group list">
        <div className="group-list group-list-flush">
          {mockGroups.map((group) => (
            <Link className="group-row group-link" to={`/groups/${group.id}`} key={group.id}>
              <div className={`group-avatar ${group.color}`}>{initialsOf(group.name)}</div>
              <div className="group-details">
                <strong>{group.name}</strong>
                <span>{group.members.length} members <span className="detail-separator">·</span> {group.frequency}</span>
              </div>
              <div className="group-next"><span>Contribution</span><strong>{group.amount}</strong></div>
              <div className="group-next"><span>Next due</span><strong>{group.nextDue}</strong></div>
              <span className={`group-status status-${group.status === "Due soon" ? "pending" : "good"}`}>{group.status}</span>
              <Icon name="arrow" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
