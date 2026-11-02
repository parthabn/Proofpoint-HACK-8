# ✨ SVM Nexus – Discover Your Potential, Create Your Impact

**SVM Nexus** is a student-centric platform designed to help students discover their hidden talents, explore opportunities, connect with like-minded communities, and actively contribute to their college ecosystem.

The platform aims to bridge the gap between student interests and college opportunities by providing a unified digital space where students can showcase their abilities, participate in activities, collaborate, and get recognized for their contributions.

---

## 🚀 Problem Statement

Many students have talents and interests beyond academics, but they often lack a centralized platform to discover opportunities and showcase their abilities.

- Students struggle to find events, hackathons, workshops, and extracurricular activities.
- Talented students may not get enough opportunities to showcase their skills.
- Students with similar interests find it difficult to connect and collaborate.
- Student contributions to college activities often go unnoticed or unrewarded.

## 💡 Our Solution

SVM Nexus provides a centralized platform that encourages students to explore their potential and become active contributors to their college community.

Through personalized talent assessments, event discovery, interest-based communities, and a contribution-based reward system, SVM Nexus makes campus engagement more accessible, interactive, and rewarding.

---

## 🌟 Key Features

### 1. 🔐 Google Authentication
- Secure Google sign-in using Firebase Authentication.
- Personalized student accounts.
- User profile information displayed after successful authentication.

### 2. 🎯 Talent Discovery & Assessment
- Interactive MCQ-based talent assessment.
- Questions designed to understand student interests, abilities, and strengths.
- Helps students identify areas where they can contribute to SVM.
- Encourages students to explore opportunities beyond academics.

### 3. 🎭 Upcoming Events & Opportunities
- Discover different college activities and events.
- Cultural activities such as dance and singing.
- Open-stage performances and talent showcases.
- Technical events such as hackathons.
- Event information including descriptions, dates, and venues.

### 4. 👥 Interest-Based Communities
- Explore communities based on student interests.
- AI and Machine Learning.
- Innovation and Startups.
- Developers Community.
- Encourages collaboration, knowledge sharing, and teamwork.

### 5. 🪙 Nexus Coins – Student Contribution Rewards

One of the key highlights of SVM Nexus is its gamified contribution system.

Students earn Nexus Coins by actively participating in college activities and contributing to the SVM ecosystem.

**Example reward structure:**

| Activity | Reward |
|---|---:|
| Participating in an event | 10 Coins |
| Reaching 50 Coins | Free Canteen Meal |
| Reaching 100 Coins | SVM Merchandise |
| Reaching 150 Coins | Recognition Certificate |

The profile dashboard displays:
- Total Nexus Coins earned.
- Contribution history.
- Reward progress bar.
- Available reward milestones.

This system encourages students to participate in activities, contribute their skills, and become more involved in campus life.

*Note: The current reward values and contribution records are demonstration data. Actual reward verification and redemption require backend integration.*

### 6. 👤 Personalized Student Dashboard
- Welcome dashboard with student information.
- Profile details and Google account status.
- Talent assessment progress.
- Event and community discovery.
- Nexus Coins and contribution tracking.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling, layouts, animations and responsiveness |
| JavaScript (ES6+) | Application logic and interactivity |
| React.js | Component-based frontend development |
| Vite | Development server and build tool |
| Firebase Authentication | Google sign-in and user authentication |
| Git & GitHub | Version control and source code management |

### Tools & Development Environment
- Visual Studio Code
- Firebase Console
- GitHub
- npm (Node Package Manager)

---

## 🏗️ Project Architecture

The application follows a component-based React architecture.

```text
SVM-NEXUS/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── FeatureStrip.jsx
│   │   ├── Login.jsx
│   │   ├── Onboarding.jsx
│   │   ├── Assessment.jsx
│   │   └── Home.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── firebase.js
│   ├── index.css
│   └── main.jsx
│
├── .env
├── .gitignore
├── index.html
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

Follow these steps to run SVM Nexus locally.

**1. Clone the repository**

```bash
git clone https://github.com/parthabn/Proofpoint-HACK-8.git
```

**2. Navigate to the project directory**

```bash
cd Proofpoint-HACK-8/svm-nexus
```

**3. Install dependencies**

```bash
npm install
```

**4. Configure Firebase**

Create a Firebase project and enable Google Authentication.

Create a `.env` file in the project root and configure the following variables:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

**5. Start the development server**

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

---

## 🌍 How SVM Nexus Helps Students

SVM Nexus aims to create a more engaging and collaborative college environment.

- **Discover:** Helps students identify their interests and hidden talents.
- **Participate:** Makes it easier to discover and explore college activities.
- **Collaborate:** Connects students with similar interests and encourages teamwork.
- **Contribute:** Motivates students to use their abilities for the college community.
- **Get Recognized:** Rewards active participation through the Nexus Coins system.

---

## 🔮 Future Enhancements

We plan to extend SVM Nexus with:

- Firebase Firestore integration for persistent student profiles and assessment results.
- Automated Nexus Coins allocation based on verified event participation.
- Actual reward redemption and canteen integration.
- Community creation and student-to-student collaboration.
- Event registration and participation tracking.
- AI-powered personalized talent recommendations.
- Admin dashboard for managing events, communities, and rewards.
- Notifications for upcoming events and opportunities.

---

## 🎯 Our Vision

We believe every student has something unique to offer.

SVM Nexus aims to transform the traditional college experience into an ecosystem where students can discover their potential, collaborate with others, showcase their talents, and make meaningful contributions.

**Discover Your Talent. Connect With Your Community. Create Your Impact.**

---

## 👨‍💻 Developed By

**SVM Nexus Team**

Built with ❤️ for a more talented, collaborative, and engaged student community.
