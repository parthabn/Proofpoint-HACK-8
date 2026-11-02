
import { useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

import { auth } from "../firebase";
import "./Login.css";

function Login({ onBack }) {
  const [loadingProvider, setLoadingProvider] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (provider, providerName) => {
    setLoadingProvider(providerName);
    setError("");

    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error(err);
      setError(`${providerName} sign-in failed. Please try again.`);
    } finally {
      setLoadingProvider("");
    }
  };

  return (
    <div className="login-page">

      <button className="back-btn" onClick={onBack}>
        ← Back to Home
      </button>

      <div className="login-card">

        <div className="login-logo">✦</div>

        <h1>SVM <span>Nexus</span></h1>

        <h2>Welcome to SVM</h2>

        <p>
          Discover your talent, connect with creative minds
          and find your place in campus culture.
        </p>

        <button
          className="auth-provider-btn"
          onClick={() => handleLogin(new GoogleAuthProvider(), "Google")}
          disabled={Boolean(loadingProvider)}
        >
          <span className="google-g">G</span>
          {loadingProvider === "Google"
            ? "Connecting..."
            : "Continue with Google"}
        </button>

        <button
          className="auth-provider-btn"
          onClick={() => handleLogin(new GithubAuthProvider(), "GitHub")}
          disabled={Boolean(loadingProvider)}
        >
          <span>GitHub</span>
          {loadingProvider === "GitHub"
            ? "Connecting..."
            : "Continue with GitHub"}
        </button>

        {error && <p className="login-error">{error}</p>}

        <div className="login-footer">
          By continuing, you agree to participate
          in the SVM community respectfully.             
        </div>

      </div>
    </div>
  );
}

export default Login;
