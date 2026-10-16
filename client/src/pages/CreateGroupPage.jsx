import { useState } from "react";
import { Link } from "react-router-dom";
import { FormField } from "../components/FormField.jsx";

const frequencies = ["Weekly", "Monthly"];

function validate(data) {
  const errors = {};
  const amount = Number(data.get("amount"));
  const maxMembers = Number(data.get("maxMembers"));

  if (data.get("name").trim().length < 3) errors.name = "Enter a group name of at least 3 characters.";
  if (!data.get("amount") || !(amount > 0)) errors.amount = "Enter an amount greater than 0.";
  else if (!/^\d+(\.\d{1,2})?$/.test(data.get("amount"))) errors.amount = "Use at most 2 decimal places.";
  if (!data.get("startDate")) errors.startDate = "Choose a start date.";
  if (!Number.isInteger(maxMembers) || maxMembers < 2 || maxMembers > 50) errors.maxMembers = "Enter a whole number between 2 and 50.";
  return errors;
}

export default function CreateGroupPage() {
  const [errors, setErrors] = useState({});
  const [created, setCreated] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next = validate(data);
    setErrors(next);
    setCreated(Object.keys(next).length === 0 ? data.get("name").trim() : null);
  }

  return (
    <div className="page-content">
      <section className="welcome-row">
        <div>
          <Link className="back-link" to="/groups">← Back to groups</Link>
          <h1>Create a group</h1>
          <p className="welcome-copy">Set the contribution rules for a new Seettu group.</p>
        </div>
      </section>

      <section className="panel form-panel">
        {created && (
          <div className="success-banner" role="status">
            “{created}” would be created here. This is a sample screen, so nothing was saved.
          </div>
        )}
        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <FormField id="name" label="Group name" error={errors.name} />
          <div className="form-row">
            <FormField id="amount" label="Contribution amount (LKR)" type="text" inputMode="decimal" error={errors.amount} />
            <FormField id="frequency" label="Frequency" options={frequencies} />
          </div>
          <div className="form-row">
            <FormField id="startDate" label="Start date" type="date" error={errors.startDate} />
            <FormField id="maxMembers" label="Maximum members" type="number" min="2" max="50" error={errors.maxMembers} />
          </div>
          <p className="field-hint">Recipients are chosen manually by the organiser each round. Rules can't be changed once the group starts.</p>
          <div className="form-actions">
            <Link className="text-button" to="/groups">Cancel</Link>
            <button className="primary-button" type="submit">Create group</button>
          </div>
        </form>
      </section>
    </div>
  );
}
