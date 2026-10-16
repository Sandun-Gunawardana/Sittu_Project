export function FormField({ id, label, error, ...inputProps }) {
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} aria-invalid={error ? "true" : undefined} aria-describedby={error ? `${id}-error` : undefined} {...inputProps} />
      {error && <span className="field-error" id={`${id}-error`} role="alert">{error}</span>}
    </div>
  );
}
