
import { useState } from "react";
import "./Assessment.css";

const questions = [
  {
    title: "What are you passionate about?",
    description: "Select all the areas that interest you.",
    type: "multiple",
    options: [
      "Technology & Programming",
      "Artificial Intelligence",
      "Music & Performing Arts",
      "Design & Creativity",
      "Sports & Fitness",
      "Management & Leadership",
      "Social Service",
      "Entrepreneurship"
    ]
  },
  {
    title: "What activities would you love to participate in?",
    description: "Choose the activities you enjoy.",
    type: "multiple",
    options: [
      "Organizing events",
      "Building projects",
      "Participating in competitions",
      "Performing on stage",
      "Teaching and mentoring",
      "Managing communities",
      "Research and innovation"
    ]
  },
  {
    title: "What skills do you currently possess?",
    description: "Select all the skills you have.",
    type: "multiple",
    options: [
      "Programming",
      "Graphic Design",
      "Video Editing",
      "Communication",
      "Leadership",
      "Event Management",
      "Music or Dance",
      "Sports",
      "Research and Problem Solving"
    ]
  },
  {
    title: "How would you describe your experience?",
    description: "There is no wrong answer. Everyone starts somewhere.",
    type: "single",
    options: [
      "Beginner",
      "Intermediate",
      "Advanced",
      "Still exploring my strengths"
    ]
  },
  {
    title: "How would you like to contribute to SVM?",
    description: "Choose the contributions that excite you.",
    type: "multiple",
    options: [
      "Develop technical solutions",
      "Organize and coordinate events",
      "Create digital content and designs",
      "Represent SVM in competitions",
      "Mentor and help other students",
      "Build and lead communities",
      "Introduce new initiatives"
    ]
  },
  {
    title: "How much time can you dedicate to SVM?",
    description: "Choose a realistic weekly commitment.",
    type: "single",
    options: [
      "1–2 hours per week",
      "3–5 hours per week",
      "5–10 hours per week",
      "More than 10 hours per week"
    ]
  },
  {
    title: "What do you want to achieve through SVM?",
    description: "Select your personal goals.",
    type: "multiple",
    options: [
      "Improve my skills",
      "Build my portfolio",
      "Network with talented people",
      "Gain leadership experience",
      "Participate in competitions",
      "Make a social impact",
      "Build something meaningful"
    ]
  },
  {
    title: "Do you have an idea you would love to bring to SVM?",
    description: "Tell us about a project, event or initiative you would like to introduce.",
    type: "text"
  }
];

function Assessment({ onBack, onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const selectAnswer = (option) => {
    setAnswers((previous) => {
      if (question.type === "single") {
        return {
          ...previous,
          [currentQuestion]: option
        };
      }

      const selected = previous[currentQuestion] || [];

      return {
        ...previous,
        [currentQuestion]: selected.includes(option)
          ? selected.filter((item) => item !== option)
          : [...selected, option]
      };
    });
  };

  const isSelected = (option) => {
    const answer = answers[currentQuestion];

    return question.type === "multiple"
      ? answer?.includes(option)
      : answer === option;
  };

  const canContinue = () => {
    const answer = answers[currentQuestion];

    if (question.type === "text") return true;

    if (question.type === "multiple") {
      return answer?.length > 0;
    }

    return Boolean(answer);
  };

  const nextQuestion = () => {
    if (!canContinue()) return;

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((previous) => previous + 1);
    } else {
      onComplete(answers);
    }
  };

  return (
    <div className="assessment-page">

      <header className="assessment-header">
        <div className="assessment-logo">
          ✦ SVM <b>Nexus</b>
        </div>

        <button className="assessment-exit" onClick={onBack}>
          ✕ Exit Assessment
        </button>
      </header>

      <main className="assessment-container">

        <div className="assessment-top">
          <span>✦ TALENT DISCOVERY</span>
          <span>
            {String(currentQuestion + 1).padStart(2, "0")} / 08
          </span>
        </div>

        <div className="assessment-progress">
          <div style={{ width: `${progress}%` }} />
        </div>

        <section className="assessment-content">

          <p className="assessment-label">
            QUESTION {currentQuestion + 1}
          </p>

          <h1>{question.title}</h1>

          <p className="assessment-description">
            {question.description}
          </p>

          {question.type === "text" ? (
            <textarea
              className="assessment-textarea"
              placeholder="Share your ideas with us..."
              value={answers[currentQuestion] || ""}
              onChange={(e) =>
                setAnswers((previous) => ({
                  ...previous,
                  [currentQuestion]: e.target.value
                }))
              }
            />
          ) : (
            <div className="assessment-options">
              {question.options.map((option, index) => (
                <button
                  key={option}
                  type="button"
                  className={`assessment-option ${
                    isSelected(option) ? "selected" : ""
                  }`}
                  onClick={() => selectAnswer(option)}
                >
                  <span className="option-letter">
                    {String.fromCharCode(65 + index)}
                  </span>

                  <span>{option}</span>

                  <span className="option-check">
                    {isSelected(option) ? "✓" : ""}
                  </span>
                </button>
              ))}
            </div>
          )}

        </section>

        <footer className="assessment-footer">

          <button
            className="assessment-back"
            onClick={() =>
              currentQuestion > 0
                ? setCurrentQuestion((previous) => previous - 1)
                : onBack()
            }
          >
            ← Previous
          </button>

          <button
            className="assessment-next"
            disabled={!canContinue()}
            onClick={nextQuestion}
          >
            {currentQuestion === questions.length - 1
              ? "Submit Assessment →"
              : "Next Question →"}
          </button>

        </footer>

        <p className="assessment-note">
          Your journey to discovering your potential starts here.
        </p>

      </main>
    </div>
  );
}

export default Assessment;
