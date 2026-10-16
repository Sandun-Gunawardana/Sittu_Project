import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Icon } from "../components/Icon.jsx";
import { ContributionsPanel, statusClass, summarise } from "../components/ContributionsPanel.jsx";
import { RoundsPanel } from "../components/RoundsPanel.jsx";
import { StatCard } from "../components/StatCard.jsx";
import PlaceholderPage from "./PlaceholderPage.jsx";
import { formatLkr, getGroup, initialsOf } from "../services/mockGroups.js";

export default function GroupDetailsPage() {
  const { groupId } = useParams();
  const group = getGroup(groupId);

  if (!group) {
    return <PlaceholderPage title="Group not found" description="This group doesn't exist or you don't have access to it." />;
  }

  return <GroupDetails key={group.id} group={group} />;
}

function GroupDetails({ group }) {
  const [rounds, setRounds] = useState(group.rounds);
  const [contributions, setContributions] = useState(() => Object.fromEntries(group.members.map((member) => [member.name, member.status])));
  const totals = summarise(group, contributions);

  function changeStatus(name, status) {
    setContributions((current) => ({ ...current, [name]: status }));
  }

  function selectRecipient(number, name) {
    setRounds((current) => current.map((round) => (round.number === number ? { ...round, recipient: name } : round)));
  }

  return (
    <div className="page-content">
      <section className="welcome-row">
        <div>
          <Link className="back-link" to="/groups">← Back to groups</Link>
          <h1>{group.name}</h1>
          <p className="welcome-copy">{group.frequency} contributions of {group.amount} · Round {group.currentRound}</p>
        </div>
      </section>

      <section className="stats-grid" aria-label="Group summary">
        <StatCard label="Contribution" value={group.amount} note={group.frequency} icon="activity" tone="lavender" />
        <StatCard label="Members" value={String(group.members.length).padStart(2, "0")} note={<span className="note-accent">{group.status}</span>} icon="groups" tone="green" />
        <StatCard label="Confirmed this round" value={formatLkr(totals.received)} note={`${formatLkr(totals.outstanding)} outstanding`} icon="calendar" tone="orange" />
      </section>

      <section className="panel activity-panel">
        <div className="panel-heading">
          <div><h2>Members</h2><p>Contribution status for the current round.</p></div>
        </div>
        <div className="activity-table-wrap">
          <table>
            <thead>
              <tr><th>MEMBER</th><th>ROLE</th><th>THIS ROUND</th><th>RECEIVED TURN</th></tr>
            </thead>
            <tbody>
              {group.members.map((member) => (
                <tr key={member.name}>
                  <td><span className="member-cell"><span className="avatar avatar-user">{initialsOf(member.name)}</span><strong>{member.name}</strong></span></td>
                  <td className="table-muted">{member.role}</td>
                  <td><span className={`activity-status ${statusClass[contributions[member.name]]}`}><span />{contributions[member.name]}</span></td>
                  <td className="table-muted">{rounds.some((round) => round.recipient === member.name) ? "Yes" : "Not yet"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <ContributionsPanel group={group} contributions={contributions} onChangeStatus={changeStatus} />

      <RoundsPanel group={group} rounds={rounds} onSelectRecipient={selectRecipient} />

      <footer className="page-footer"><span>Digital Seettu</span><span>This is a visual sample with fictional data. No payments are processed.</span></footer>
    </div>
  );
}
