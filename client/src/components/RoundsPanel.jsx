import { useState } from "react";
import { eligibleRecipients } from "../services/mockGroups.js";

export function RoundsPanel({ group, rounds, onSelectRecipient }) {
  const [choice, setChoice] = useState("");
  const [error, setError] = useState("");
  const openRound = rounds.find((round) => !round.recipient);
  const eligible = eligibleRecipients(group, rounds);

  function handleSubmit(event) {
    event.preventDefault();
    if (!choice) {
      setError("Choose a member to receive this round.");
      return;
    }
    setError("");
    onSelectRecipient(openRound.number, choice);
    setChoice("");
  }

  return (
    <section className="panel activity-panel" aria-label="Rounds">
      <div className="panel-heading">
        <div><h2>Rounds</h2><p>Each member receives the pot once. The organiser chooses the recipient.</p></div>
      </div>
      <div className="activity-table-wrap">
        <table>
          <thead><tr><th>ROUND</th><th>DUE DATE</th><th>RECIPIENT</th></tr></thead>
          <tbody>
            {rounds.map((round) => (
              <tr key={round.number}>
                <td className="amount-cell">Round {round.number}</td>
                <td className="table-muted">{round.dueDate}</td>
                <td>{round.recipient ?? <span className="table-muted">Not selected</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {openRound && (
        <form className="recipient-form" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label htmlFor="recipient">Recipient for round {openRound.number} (organiser action)</label>
            <select id="recipient" value={choice} onChange={(event) => setChoice(event.target.value)} aria-invalid={error ? "true" : undefined} aria-describedby={error ? "recipient-error" : undefined}>
              <option value="">Select a member…</option>
              {eligible.map((member) => <option key={member.name} value={member.name}>{member.name}</option>)}
            </select>
            {error && <span className="field-error" id="recipient-error" role="alert">{error}</span>}
          </div>
          <button className="primary-button" type="submit">Select recipient</button>
        </form>
      )}
      {!openRound && <p className="panel-note">Every round has a recipient.</p>}
    </section>
  );
}
