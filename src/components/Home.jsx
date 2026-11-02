
import { useState } from "react";
import Assessment from "./Assessment";
import "./Home.css";

function Home({ user, onLogout }) {
  const firstName = user?.displayName?.split(" ")[0] || "Student";

  const [showAssessment, setShowAssessment] = useState(false);
  const [assessmentCompleted, setAssessmentCompleted] = useState(false);

  // DEMO CONTRIBUTION DATA
  const contributions = [
    {
      name: "Rhythm – Dance Festival",
      type: "Event Participation",
      points: 10
    },
    {
      name: "CodeStorm – Hackathon",
      type: "Event Participation",
      points: 10
    }
  ];

  const totalCoins = contributions.reduce(
    (total, item) => total + item.points,
    0
  );

  const rewardTarget = 50;
  const progress = Math.min((totalCoins / rewardTarget) * 100, 100);

  // UPCOMING EVENTS
  const navigation = [
    { icon: "⌂", label: "Overview", id: "overview" },
    { icon: "✦", label: "Discover Talent", id: "discover" },
    { icon: "▦", label: "Events", id: "events" },
    { icon: "◎", label: "Communities", id: "communities" },
    { icon: "♙", label: "My Profile", id: "profile" }
  ];

  const events = [
    {
      image: "https://images.unsplash.com/photo-1504609813442-1910b4d3f9e6?w=700",
      category: "CULTURAL",
      categoryClass: "",
      date: "NOV 15, 2026",
      title: "Rhythm – Dance Festival",
      description: "Celebrate creativity, energy and passion through spectacular dance performances.",
      venue: "Main Auditorium"
    },
    {
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=700",
      category: "MUSIC",
      categoryClass: "orange-label",
      date: "NOV 20, 2026",
      title: "Voice of SVM – Open Mic",
      description: "Grab the microphone, showcase your singing talent and let your voice be heard.",
      venue: "Seminar Hall"
    },
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700",
      category: "TECHNOLOGY",
      categoryClass: "blue-label",
      date: "NOV 25, 2026",
      title: "CodeStorm – Hackathon",
      description: "Team up with innovators, solve real-world problems and build something extraordinary.",
      venue: "Innovation Lab"
    },
    {
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=700",
      category: "TALENT",
      categoryClass: "pink-label",
      date: "NOV 30, 2026",
      title: "Unplugged – Open Stage",
      description: "Poetry, comedy, music and everything creative. This stage belongs to you!",
      venue: "Open Air Theatre"
    }
  ];

  // ASSESSMENT PAGE
  if (showAssessment) {
    return (
      <Assessment
        onBack={() => setShowAssessment(false)}
        onComplete={(answers) => {
          console.log("Assessment answers:", answers);
          setAssessmentCompleted(true);
          setShowAssessment(false);
        }}
      />
    );
  }

  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="dashboard-logo">
          <span>✦</span> SVM <b>Nexus</b>
        </div>

        <p className="sidebar-heading">MENU</p>

        <nav>
          {navigation.map((item, index) => (
            <a
              href={`#${item.id}`}
              key={item.id}
              className={`sidebar-link ${index === 0 ? "active" : ""}`}
            >
              <span>{item.icon}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="sidebar-bottom">

          <div className="sidebar-user">
            {user?.photoURL ? (
              <img src={user.photoURL} alt="Profile" />
            ) : (
              <div className="avatar-placeholder">
                {firstName.charAt(0)}
              </div>
            )}

            <div>
              <strong>{firstName}</strong>
              <small>Student</small>
            </div>
          </div>

          <button className="logout-button" onClick={onLogout}>
            ↗ Logout
          </button>

        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="dashboard-main" id="overview">

        {/* HEADER */}
        <header className="dashboard-header">

          <div>
            <p className="dashboard-date">SVM NEXUS / DASHBOARD</p>
            <h2>Overview</h2>
          </div>

          <div className="header-profile">
            {user?.photoURL && (
              <img src={user.photoURL} alt="Profile" />
            )}
            <span>{firstName}</span>
          </div>

        </header>

        {/* WELCOME */}
        <section className="welcome-banner">

          <div>
            <span className="welcome-tag">
              YOUR JOURNEY STARTS HERE
            </span>

            <h1>Welcome back, {firstName}! 👋</h1>

            <p>
              Discover your strengths, connect with like-minded people
              and find opportunities to grow.
            </p>

            <a href="#discover" className="welcome-button">
              Explore your potential →
            </a>
          </div>

          <div className="welcome-decoration">✦</div>

        </section>

        {/* STATS */}
        <section className="stats-grid">

          <div className="stat-card">
            <div className="stat-icon purple">✦</div>
            <p>Talent Assessment</p>

            <h2>
              {assessmentCompleted ? "Completed" : "Not Started"}
            </h2>

            <span>
              {assessmentCompleted
                ? "Your assessment is complete"
                : "Discover your strengths"}
            </span>
          </div>

          <div className="stat-card">
            <div className="stat-icon orange">♧</div>
            <p>Communities</p>
            <h2>Explore</h2>
            <span>Find your people</span>
          </div>

          <div className="stat-card">
            <div className="stat-icon blue">▦</div>
            <p>Upcoming Events</p>
            <h2>{events.length} Events</h2>
            <span>Don't miss opportunities</span>
          </div>

        </section>

        {/* TALENT DISCOVERY */}
        <section className="dashboard-section" id="discover">

          <div className="section-heading">

            <div>
              <p className="section-label">KNOW YOURSELF</p>
              <h2>Discover Your Talent</h2>
            </div>

            <span className="section-count">01 / DISCOVER</span>

          </div>

          <div className="talent-card">

            <div>
              <span className="talent-tag">
                PERSONALIZED ASSESSMENT
              </span>

              <h2>What makes you unique?</h2>

              <p>
                Take our talent discovery assessment to understand
                your interests, abilities and hidden strengths.
              </p>

              <button
                className="primary-button"
                onClick={() => setShowAssessment(true)}
              >
                {assessmentCompleted
                  ? "Retake Assessment →"
                  : "Start Assessment →"}
              </button>
            </div>

            <div className="talent-illustration">
              ✧
            </div>

          </div>
        </section>

        {/* UPCOMING EVENTS */}
        <section className="dashboard-section" id="events">

          <div className="section-heading">

            <div>
              <p className="section-label">WHAT'S HAPPENING</p>
              <h2>Upcoming Events</h2>
            </div>

            <span className="section-count">02 / EXPLORE</span>

          </div>

          <div className="events-grid">

            {events.map((event, index) => (
              <div className="event-card" key={index}>

                <div className="event-image">

                  <img
                    src={event.image}
                    alt={event.title}
                    loading="lazy"
                  />

                  <span className={`event-category ${event.categoryClass}`}>
                    {event.category}
                  </span>

                </div>

                <div className="event-content">

                  <p className="event-date">
                    📅 {event.date}
                  </p>

                  <h3>{event.title}</h3>

                  <p className="event-description">
                    {event.description}
                  </p>

                  <div className="event-footer">

                    <span>📍 {event.venue}</span>

                    <button
                      onClick={() =>
                        alert(`${event.title}\n\nThis is a demo event for SVM Nexus.`)
                      }
                    >
                      Explore →
                    </button>

                  </div>

                </div>
              </div>
            ))}

          </div>
        </section>

        {/* COMMUNITIES */}
        <section className="dashboard-section" id="communities">

          <div className="section-heading">

            <div>
              <p className="section-label">FIND YOUR PEOPLE</p>
              <h2>Explore Communities</h2>
            </div>

            <a href="#communities">View all →</a>

          </div>

          <div className="community-grid">

            <div className="community-card">
              <span>🤖</span>
              <div>
                <h3>AI & Machine Learning</h3>
                <p>For curious minds exploring AI.</p>
              </div>
              <button>Explore →</button>
            </div>

            <div className="community-card">
              <span>💡</span>
              <div>
                <h3>Innovation & Startups</h3>
                <p>Turn creative ideas into reality.</p>
              </div>
              <button>Explore →</button>
            </div>

            <div className="community-card">
              <span>💻</span>
              <div>
                <h3>Developers Community</h3>
                <p>Learn, code and collaborate.</p>
              </div>
              <button>Explore →</button>
            </div>

          </div>
        </section>

        {/* MY PROFILE & NEXUS COINS */}
        <section className="dashboard-section" id="profile">

          <div className="section-heading">

            <div>
              <p className="section-label">YOUR JOURNEY</p>
              <h2>My Profile</h2>
            </div>

            <span className="section-count">03 / PROFILE</span>

          </div>

          {/* PROFILE INFORMATION */}
          <div className="profile-card">

            <div className="profile-info">

              {user?.photoURL ? (
                <img src={user.photoURL} alt="Profile" />
              ) : (
                <div className="avatar-placeholder">
                  {firstName.charAt(0)}
                </div>
              )}

              <div>
                <h2>{user?.displayName || "Student"}</h2>
                <p>{user?.email}</p>

                <span className="verified-label">
                  ✓ Google Account Connected
                </span>
              </div>

            </div>

          </div>

          {/* NEXUS COINS */}
          <div className="rewards-card">

            <div className="rewards-header">

              <div>
                <span className="talent-tag">
                  SVM CONTRIBUTION PROGRAM
                </span>

                <h2>Your Impact Matters!</h2>

                <p>
                  Contribute to SVM, earn Nexus Coins and
                  unlock exciting rewards.
                </p>
              </div>

              <div className="coin-display">
                <span>🪙</span>
                <h1>{totalCoins}</h1>
                <small>NEXUS COINS</small>
              </div>

            </div>

            {/* REWARD PROGRESS */}
            <div className="reward-progress">

              <div className="progress-heading">
                <strong>🎁 Free Canteen Meal</strong>
                <span>{totalCoins}/{rewardTarget} NC</span>
              </div>

              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <p>
                {totalCoins >= rewardTarget
                  ? "Congratulations! You have unlocked a free canteen meal!"
                  : `Earn ${rewardTarget - totalCoins} more coins to unlock your free meal!`}
              </p>

            </div>

            {/* CONTRIBUTION HISTORY */}
            <div className="contribution-history">

              <h3>Your Contributions</h3>

              {contributions.map((item, index) => (

                <div className="contribution-item" key={index}>

                  <div className="contribution-icon">
                    🏆
                  </div>

                  <div className="contribution-details">
                    <strong>{item.name}</strong>
                    <small>{item.type}</small>
                  </div>

                  <span className="earned-coins">
                    +{item.points} NC 🪙
                  </span>

                </div>

              ))}

            </div>

            {/* REWARDS CATALOGUE */}
            <div className="rewards-catalogue">

              <h3>Unlock Rewards</h3>

              <div className="reward-options">

                <div className="reward-option">
                  <span>🍔</span>
                  <strong>Free Canteen Meal</strong>
                  <small>50 NC</small>
                </div>

                <div className="reward-option">
                  <span>👕</span>
                  <strong>SVM Merchandise</strong>
                  <small>100 NC</small>
                </div>

                <div className="reward-option">
                  <span>🏅</span>
                  <strong>Recognition Certificate</strong>
                  <small>150 NC</small>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* FOOTER */}
        <footer className="dashboard-footer">
          © 2026 SVM Nexus. Discover your potential.
        </footer>

      </main>
    </div>
  );
}

export default Home;
