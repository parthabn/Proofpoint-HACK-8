
import { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signOut
} from "firebase/auth";

import { auth } from "./firebase";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureStrip from "./components/FeatureStrip";
import Login from "./components/Login";
import Home from "./components/Home";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
        setCheckingAuth(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // Authentication loading
  if (checkingAuth) {
    return <div>Loading SVM Nexus...</div>;
  }

  // Show Home Dashboard after successful login
  if (user) {
    return (
      <Home
        user={user}
        onLogout={() => signOut(auth)}
      />
    );
  }

  // Show Login page
  if (showLogin) {
    return (
      <Login
        onBack={() => setShowLogin(false)}
      />
    );
  }

  // Landing page
  return (
    <div className="app">
      <Navbar
        onLoginClick={() => setShowLogin(true)}
      />
      <Hero />
      <FeatureStrip />
    </div>
  );
}

export default App;
