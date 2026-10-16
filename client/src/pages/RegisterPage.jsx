import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "../components/AuthLayout.jsx";
import { FormField } from "../components/FormField.jsx";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next = {};
    if (data.get("fullName").trim().length < 2) next.fullName = "Enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(data.get("email").trim())) next.email = "Enter a valid email address.";
    if (data.get("password").length < 8) next.password = "Use at least 8 characters.";
    if (data.get("confirmPassword") !== data.get("password")) next.confirmPassword = "Passwords do not match.";
    setErrors(next);
    if (Object.keys(next).length === 0) navigate("/");
  }

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Join or organise a Seettu group."
      footer={<>Already have an account? <Link to="/login">Log in</Link></>}
    >
      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <FormField id="fullName" label="Full name" autoComplete="name" error={errors.fullName} />
        <FormField id="email" label="Email" type="email" autoComplete="email" error={errors.email} />
        <FormField id="password" label="Password" type="password" autoComplete="new-password" error={errors.password} />
        <FormField id="confirmPassword" label="Confirm password" type="password" autoComplete="new-password" error={errors.confirmPassword} />
        <button className="primary-button auth-submit" type="submit">Create account</button>
      </form>
    </AuthLayout>
  );
}
