
import { useState } from "react";
import "./Onboarding.css";

function Onboarding({ user, onComplete }) {
  const [formData, setFormData] = useState({
    usn: "",
    department: "",
    year: "",
    interests: [],
  });

  const interestOptions = [
    "Music",
    "Dance",
    "Photography",
    "Videography",
    "Art & Design",
    "Writing",
    "Poetry",
    "Anchoring",
    "Drama & Theatre",
    "Content Creation",
  ];

  const handleInterest = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((item) => item !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.interests.length === 0) {
      alert("Please select at least one interest.");
      return;
    }

    onComplete({
      ...formData,
      name: user?.displayName || "",
      email: user?.email || "",
      photoURL: user?.photoURL || "",
    });
  };

  return (
    <div className="onboarding-page">
      <div className="onboarding-container">

        <div className="onboarding-brand">
          <span>✦</span> SVM Nexus
        </div>

        <div className="onboarding-heading">
          <span className="onboarding-tag">
            YOUR JOURNEY STARTS HERE
          </span>

          <h1>
            Let's get to <span>know you.</span>
          </h1>

          <p>
            Tell us a little about yourself so we can
            help you discover your creative potential.
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="student-profile">
            <div className="profile-avatar">
              {user?.photoURL ? (
                <img src={user.photoURL} alt="Profile" />
              ) : (
                "✦"
              )}
            </div>

            <div>
              <h3>{user?.displayName || "Student"}</h3>
              <p>{user?.email}</p>
            </div>
          </div>

          <div className="onboarding-section">
            <h2>01. Academic details</h2>

            <label>University Seat Number (USN)</label>
            <input
              type="text"
              placeholder="Enter your USN"
              value={formData.usn}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  usn: e.target.value.toUpperCase(),
                })
              }
              required
            />

            <label>Department</label>
            <select
              value={formData.department}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  department: e.target.value,
                })
              }
              required
            >
              <option value="">Select your department</option>
              <option value="CSE">Computer Science & Engineering</option>
              <option value="AIML">Artificial Intelligence & ML</option>
              <option value="ECE">Electronics & Communication</option>
              <option value="EEE">Electrical & Electronics</option>
              <option value="ME">Mechanical Engineering</option>
              <option value="CV">Civil Engineering</option>
              <option value="Other">Other</option>
            </select>

            <label>Current year of study</label>
            <select
              value={formData.year}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  year: e.target.value,
                })
              }
              required
            >
              <option value="">Select your year</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>
          </div>

          <div className="onboarding-section">
            <h2>02. What interests you?</h2>

            <p className="section-description">
              Select everything you're interested in.
              You don't need prior experience!
            </p>

            <div className="interest-grid">
              {interestOptions.map((interest) => (
                <button
                  type="button"
                  key={interest}
                  className={`interest-option ${
                    formData.interests.includes(interest)
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => handleInterest(interest)}
                >
                  <span>
                    {formData.interests.includes(interest)
                      ? "✓"
                      : "+"}
                  </span>
                  {interest}
                </button>
              ))}
            </div>
          </div>

          <button className="onboarding-submit" type="submit">
            Continue to Talent Discovery →
          </button>

          <p className="onboarding-note">
            Your information helps us create a more
            personalized SVM experience.
          </p>

        </form>
      </div>
    </div>
  );
}

export default Onboarding;
