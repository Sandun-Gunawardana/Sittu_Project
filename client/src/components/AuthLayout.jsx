import { Link } from "react-router-dom";

export function AuthLayout({ title, subtitle, children, footer }) {
  return (
    <div className="auth-shell">
      <div className="auth-card">
        <Link className="brand auth-brand" to="/" aria-label="Digital Seettu home">
          <span className="brand-mark">S</span>
          <span>seettu<span className="brand-period">.</span></span>
        </Link>
        <h1>{title}</h1>
        <p className="auth-subtitle">{subtitle}</p>
        {children}
        <p className="auth-footer">{footer}</p>
        <p className="auth-note">Sample screen with fictional data. No account is created.</p>
      </div>
    </div>
  );
}
