import { useState } from "react";
import { statusClass } from "../components/ContributionsPanel.jsx";
import { mockActivity } from "../services/mockActivity.js";

const statuses = ["All statuses", "Confirmed", "Pending", "Disputed"];
const groupNames = ["All groups", ...new Set(mockActivity.map((item) => item.group))];

export default function ContributionsPage() {
  const [status, setStatus] = useState(statuses[0]);
  const [group, setGroup] = useState(groupNames[0]);

  const rows = mockActivity.filter((item) => (status === statuses[0] || item.status === status) && (group === groupNames[0] || item.group === group));

  return (
    <div className="page-content">
      <section className="welcome-row">
        <div>
          <div className="eyebrow">HISTORY</div>
          <h1>Contributions</h1>
          <p className="welcome-copy">Recorded payments across your groups.</p>
        </div>
      </section>

      <section className="panel activity-panel" aria-label="Contribution history">
        <div className="filter-row">
          <div className="form-field">
            <label htmlFor="statusFilter">Status</label>
            <select id="statusFilter" value={status} onChange={(event) => setStatus(event.target.value)}>
              {statuses.map((option) => <option key={option}>{option}</option>)}
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="groupFilter">Group</label>
            <select id="groupFilter" value={group} onChange={(event) => setGroup(event.target.value)}>
              {groupNames.map((option) => <option key={option}>{option}</option>)}
            </select>
          </div>
        </div>

        {rows.length === 0 ? (
          <p className="panel-note" role="status">No contributions match these filters.</p>
        ) : (
          <div className="activity-table-wrap">
            <table>
              <thead><tr><th>MEMBER</th><th>GROUP</th><th>DATE</th><th>AMOUNT</th><th>STATUS</th></tr></thead>
              <tbody>
                {rows.map((item) => (
                  <tr key={`${item.name}-${item.date}`}>
                    <td><span className="member-cell"><span className="avatar avatar-user">{item.initials}</span><strong>{item.name}</strong></span></td>
                    <td className="table-muted">{item.group}</td>
                    <td className="table-muted">{item.date}</td>
                    <td className="amount-cell">{item.amount}</td>
                    <td><span className={`activity-status ${statusClass[item.status]}`}><span />{item.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
