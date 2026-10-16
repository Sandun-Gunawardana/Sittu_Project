import { Link } from "react-router-dom";
import { statusClass, summarise } from "../components/ContributionsPanel.jsx";
import { formatLkr, initialsOf, mockGroups } from "../services/mockGroups.js";

function statusMap(group) {
  return Object.fromEntries(group.members.map((member) => [member.name, member.status]));
}

const summaries = mockGroups.map((group) => ({ group, totals: summarise(group, statusMap(group)) }));

const outstanding = mockGroups.flatMap((group) =>
  group.members
    .filter((member) => member.status !== "Confirmed")
    .map((member) => ({ group, member })),
);

export default function ReportsPage() {
  return (
    <div className="page-content">
      <section className="welcome-row">
        <div>
          <div className="eyebrow">SUMMARIES</div>
          <h1>Reports</h1>
          <p className="welcome-copy">Totals count confirmed contributions only.</p>
        </div>
      </section>

      <section className="panel activity-panel" aria-label="Group summary report">
        <div className="panel-heading">
          <div><h2>Group summary</h2><p>Current round for each group.</p></div>
        </div>
        <div className="activity-table-wrap">
          <table>
            <thead><tr><th>GROUP</th><th>ROUND</th><th>EXPECTED</th><th>CONFIRMED</th><th>OUTSTANDING</th><th>DISPUTED</th></tr></thead>
            <tbody>
              {summaries.map(({ group, totals }) => (
                <tr key={group.id}>
                  <td><Link className="table-link" to={`/groups/${group.id}`}>{group.name}</Link></td>
                  <td className="table-muted">Round {group.currentRound}</td>
                  <td className="amount-cell">{formatLkr(totals.expected)}</td>
                  <td className="amount-cell">{formatLkr(totals.received)}</td>
                  <td className="amount-cell">{formatLkr(totals.outstanding)}</td>
                  <td className="table-muted">{totals.disputed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="panel activity-panel" aria-label="Unpaid and unconfirmed contributions">
        <div className="panel-heading">
          <div><h2>Needs attention</h2><p>Contributions that are not yet confirmed.</p></div>
        </div>
        {outstanding.length === 0 ? (
          <p className="panel-note" role="status">Everything is confirmed.</p>
        ) : (
          <div className="activity-table-wrap">
            <table>
              <thead><tr><th>MEMBER</th><th>GROUP</th><th>AMOUNT</th><th>STATUS</th></tr></thead>
              <tbody>
                {outstanding.map(({ group, member }) => (
                  <tr key={`${group.id}-${member.name}`}>
                    <td><span className="member-cell"><span className="avatar avatar-user">{initialsOf(member.name)}</span><strong>{member.name}</strong></span></td>
                    <td className="table-muted">{group.name}</td>
                    <td className="amount-cell">{group.amount}</td>
                    <td><span className={`activity-status ${statusClass[member.status]}`}><span />{member.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <footer className="page-footer"><span>Digital Seettu</span><span>This is a visual sample with fictional data. No payments are processed.</span></footer>
    </div>
  );
}
