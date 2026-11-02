
function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <span className="logo-star">✦</span>
        <span>SVM</span>
        <span className="logo-nexus">Nexus</span>
      </div>

      <div className="nav-links">
        <a href="#discover">Discover</a>
        <a href="#events">Events</a>
        <a href="#communities">Communities</a>
      </div>

      <div className="nav-actions">
        <button className="login-btn">Login</button>

        <button className="get-started-btn">
          Get Started →
        </button>
      </div>

    </nav>
  );
}

export default Navbar;
