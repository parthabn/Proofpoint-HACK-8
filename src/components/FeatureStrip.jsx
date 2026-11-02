
const features = [
  {
    icon: "✦",
    title: "Discover",
    description: "Discover your hidden talents and explore new interests."
  },
  {
    icon: "◎",
    title: "Connect",
    description: "Meet creative students and find people who share your passion."
  },
  {
    icon: "✧",
    title: "Create",
    description: "Collaborate, participate and bring your ideas to life."
  }
];

function FeatureStrip() {
  return (
    <section className="feature-section" id="features">

      <div className="section-heading" id="discover">
        <span>YOUR CREATIVE JOURNEY</span>
        <h2>More than just a club.</h2>
        <p>A place where every talent finds its stage.</p>
      </div>

      <div className="feature-grid">

        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default FeatureStrip;
