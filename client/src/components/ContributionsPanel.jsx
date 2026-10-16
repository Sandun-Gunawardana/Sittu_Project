import { formatLkr, initialsOf } from "../services/mockGroups.js";

export const statusClass = {
  Confirmed: "activity-confirmed",
  Pending: "activity-pending",
  Disputed: "activity-disputed",
  "Not paid": "activity-unpaid",
};

// Only confirmed contributions count towards received totals.
export function summarise(group, contributions) {
  const confirmed = group.members.filter((member) => contributions[member.name] === "Confirmed").length;
  const disputed = group.members.filter((member) => contributions[member.name] === "Disputed").length;
  const expected = group.amountValue * group.members.length;
  const received = group.amountValue * confirmed;
  return { expected, received, outstanding: expected - received, disputed };
}

export function ContributionsPanel({ group, contributions, onChangeStatus }) {
  const totals = summarise(group, contributions);

  return (
    <section className="panel activity-panel" aria-label="Contributions">
      <div className="panel-heading">
        <div><h2>Round {group.currentRound} contributions</h2><p>Payments are made outside the app. The organiser records and confirms them.</p></div>
      </div>

      <dl className="totals-row">
        <div><dt>Expected</dt><dd>{formatLkr(totals.expected)}</dd></div>
        <div><dt>Confirmed</dt><dd>{formatLkr(totals.received)}</dd></div>
        <div><dt>Outstanding</dt><dd>{formatLkr(totals.outstanding)}</dd></div>
        <div><dt>Disputed</dt><dd>{totals.disputed}</dd></div>
      </dl>

      <div className="activity-table-wrap">
        <table>
          <thead><tr><th>MEMBER</th><th>STATUS</th><th>ORGANISER ACTIONS</th></tr></thead>
          <tbody>
            {group.members.map((member) => {
              const status = contributions[member.name];
              return (
                <tr key={member.name}>
                  <td><span className="member-cell"><span className="avatar avatar-user">{initialsOf(member.name)}</span><strong>{member.name}</strong></span></td>
                  <td><span className={`activity-status ${statusClass[status]}`}><span />{status}</span></td>
                  <td>
                    <span className="row-actions">
                      {status === "Not paid" && <button className="mini-button" type="button" onClick={() => onChangeStatus(member.name, "Pending")}>Record payment</button>}
                      {(status === "Pending" || status === "Disputed") && <button className="mini-button" type="button" onClick={() => onChangeStatus(member.name, "Confirmed")}>Confirm</button>}
                      {status === "Pending" && <button className="mini-button mini-danger" type="button" onClick={() => onChangeStatus(member.name, "Disputed")}>Dispute</button>}
                      {status === "Confirmed" && <span className="table-muted">No action needed</span>}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
