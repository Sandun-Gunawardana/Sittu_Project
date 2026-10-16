export function FormField({ id, label, error, hint, options, ...controlProps }) {
  const describedBy = [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(" ") || undefined;
  const shared = { id, name: id, "aria-invalid": error ? "true" : undefined, "aria-describedby": describedBy, ...controlProps };

  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      {options ? (
        <select {...shared}>
          {options.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
      ) : (
        <input {...shared} />
      )}
      {hint && <span className="field-hint" id={`${id}-hint`}>{hint}</span>}
      {error && <span className="field-error" id={`${id}-error`} role="alert">{error}</span>}
    </div>
  );
}
