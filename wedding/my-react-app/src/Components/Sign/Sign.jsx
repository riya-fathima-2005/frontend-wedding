import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/Style/Sign.css";
import logo from "../../assets/Images/logo.png";

const Sign = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // SIGNUP
  const handleSubmit = async (e) => {

    e.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    const { name, email, password, confirmPassword } = formData;

    // PASSWORD CHECK
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    // PASSWORD LENGTH
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters");
      return;
    }

    try {

      setLoading(true);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/signup/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      // ERROR
      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      // SAVE JWT TOKEN
      localStorage.setItem("token", data.token);

      // SAVE USER
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      // SUCCESS
      setSuccessMessage("Account created successfully!");

      // CLEAR FORM
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      // REDIRECT
      setTimeout(() => {
        navigate("/");
      }, 1500);

    } catch (error) {

      setErrorMessage(error.message);

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="signup-container">

      <form
        className="signup-form"
        onSubmit={handleSubmit}
      >


<div className="login-logo">

  <img
    src={logo}
    alt="Logo"
  />

</div>

<h2>
Create Account
</h2>

        {/* ERROR */}
        {errorMessage && (
          <p className="error-message">
            {errorMessage}
          </p>
        )}

        {/* SUCCESS */}
        {successMessage && (
          <p className="success-message">
            {successMessage}
          </p>
        )}

        {/* NAME */}
        <div className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* EMAIL */}
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* PASSWORD */}
        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="input-group">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Creating Account..."
            : "Sign Up"}
        </button>

        {/* LOGIN */}
        <div style={{color:"white"}} className="login-text">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </div>

      </form>

    </div>
  );
};

export default Sign;