import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "../components/AuthLayout.jsx";
import { FormField } from "../components/FormField.jsx";

export default function LoginPage() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next = {};
    if (!/^\S+@\S+\.\S+$/.test(data.get("email").trim())) next.email = "Enter a valid email address.";
    if (!data.get("password")) next.password = "Enter your password.";
    setErrors(next);
    if (Object.keys(next).length === 0) navigate("/");
  }

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Log in to see your Seettu groups."
      footer={<>New here? <Link to="/register">Create an account</Link></>}
    >
      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <FormField id="email" label="Email" type="email" autoComplete="email" error={errors.email} />
        <FormField id="password" label="Password" type="password" autoComplete="current-password" error={errors.password} />
        <button className="primary-button auth-submit" type="submit">Log in</button>
      </form>
    </AuthLayout>
  );
}
