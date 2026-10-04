import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");

  const [showJoinForm, setShowJoinForm] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const [joinForm, setJoinForm] = useState({
    name: "",
    phone: "",
    goal: "",
    program: "",
  });

  const programs = [
    {
      id: "01",
      title: "STRENGTH TRAINING",
      shortTitle: "STRENGTH",
      description:
        "Build lean muscle, increase power and develop real-world strength with structured resistance training.",
      duration: "60 MIN",
      level: "BEGINNER → ADVANCED",
      benefits: [
        "Build muscle & strength",
        "Improve body composition",
        "Increase functional power",
        "Progressive workout plans",
      ],
    },
    {
      id: "02",
      title: "FAT BURN",
      shortTitle: "FAT BURN",
      description:
        "High-energy workouts designed to burn calories, improve endurance and help you move towards your fitness goals.",
      duration: "45 MIN",
      level: "ALL LEVELS",
      benefits: [
        "High calorie burn",
        "Improve cardiovascular fitness",
        "Boost stamina",
        "Goal-focused sessions",
      ],
    },
    {
      id: "03",
      title: "BOXING & HIIT",
      shortTitle: "BOXING + HIIT",
      description:
        "Combine boxing techniques with explosive HIIT sessions to build speed, stamina, coordination and confidence.",
      duration: "50 MIN",
      level: "INTERMEDIATE",
      benefits: [
        "Improve endurance",
        "Full-body conditioning",
        "Better coordination",
        "Stress-relieving workouts",
      ],
    },
    {
      id: "04",
      title: "PERSONAL TRAINING",
      shortTitle: "PERSONAL TRAINING",
      description:
        "Get one-on-one attention from an experienced coach with workouts designed around your individual goals.",
      duration: "60 MIN",
      level: "ALL LEVELS",
      benefits: [
        "Personalized workout plan",
        "One-on-one coaching",
        "Progress tracking",
        "Goal-based guidance",
      ],
    },
  ];

  const closeMenu = () => setMenuOpen(false);

  const calculateBMI = (e) => {
    e.preventDefault();

    const heightInMeters = Number(height) / 100;
    const weightValue = Number(weight);

    if (
      !heightInMeters ||
      !weightValue ||
      heightInMeters <= 0 ||
      weightValue <= 0
    ) {
      setBmi(null);
      setBmiStatus("Please enter valid height and weight.");
      return;
    }

    const calculatedBMI =
      weightValue / (heightInMeters * heightInMeters);

    setBmi(calculatedBMI.toFixed(1));

    if (calculatedBMI < 18.5) {
      setBmiStatus("Underweight");
    } else if (calculatedBMI < 25) {
      setBmiStatus("Healthy Weight");
    } else if (calculatedBMI < 30) {
      setBmiStatus("Overweight");
    } else {
      setBmiStatus("Obesity Range");
    }
  };

  const handleJoinChange = (e) => {
    setJoinForm({
      ...joinForm,
      [e.target.name]: e.target.value,
    });
  };

  const submitJoinForm = (e) => {
    e.preventDefault();

    const message = `Hello IronForge Fitness! 💪

I am interested in joining the gym.

Name: ${joinForm.name}
Phone: ${joinForm.phone}
Fitness Goal: ${joinForm.goal}
Preferred Program: ${joinForm.program}

Please share the membership details. Thank you!`;

    const whatsappNumber = "919876543210";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setShowJoinForm(false);
  };

  const openProgram = (program) => {
    setSelectedProgram(program);
  };

  const closeProgram = () => {
    setSelectedProgram(null);
  };

  const joinSelectedProgram = () => {
    const programName = selectedProgram?.shortTitle || "";

    setJoinForm({
      ...joinForm,
      program: programName,
    });

    setSelectedProgram(null);
    setShowJoinForm(true);
  };

  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          IRON<span>FORGE</span>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#programs" onClick={closeMenu}>Programs</a>
          <a href="#trainers" onClick={closeMenu}>Trainers</a>
          <a href="#bmi" onClick={closeMenu}>BMI</a>
          <a href="#membership" onClick={closeMenu}>Membership</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <button
          className="nav-join"
          onClick={() => setShowJoinForm(true)}
        >
          JOIN NOW
        </button>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="hero-small">PUNE'S PREMIUM FITNESS CLUB</p>

          <h1>
            BUILD YOUR
            <br />
            <span>BEST VERSION.</span>
          </h1>

          <p className="hero-text">
            Train harder. Move better. Become stronger.
            <br />
            Your transformation starts here.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => setShowJoinForm(true)}
            >
              START YOUR JOURNEY →
            </button>

            <a href="#programs" className="secondary-btn">
              EXPLORE PROGRAMS
            </a>
          </div>
        </div>

        <div className="hero-number">01</div>
      </section>

      {/* ABOUT */}
      <section className="about section" id="about">
        <div className="section-label">01 — WHO WE ARE</div>

        <div className="about-grid">
          <div className="about-heading">
            <p className="small-title">NO EXCUSES.</p>

            <h2>
              TRAIN WITH
              <br />
              <span>PURPOSE.</span>
            </h2>
          </div>

          <div className="about-text">
            <p>
              IRONFORGE FITNESS is built for people who are serious
              about becoming stronger, healthier and more confident.
            </p>

            <p>
              With expert trainers, modern equipment and
              goal-focused programs, we create an environment
              where every workout has a purpose.
            </p>

            <div className="stats">
              <div>
                <strong>5+</strong>
                <span>YEARS EXPERIENCE</span>
              </div>

              <div>
                <strong>1K+</strong>
                <span>MEMBERS</span>
              </div>

              <div>
                <strong>12</strong>
                <span>EXPERT TRAINERS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="programs section" id="programs">
        <div className="section-label">02 — WHAT WE DO</div>

        <div className="section-heading">
          <div>
            <p className="small-title">TRAIN SMARTER</p>

            <h2>
              OUR <span>PROGRAMS.</span>
            </h2>
          </div>

          <p>
            Tap any program to explore the training style,
            benefits and session details.
          </p>
        </div>

        <div className="program-grid">
          {programs.map((program) => (
            <button
              className="program-card"
              key={program.id}
              onClick={() => openProgram(program)}
            >
              <div className="program-number">{program.id}</div>

              <h3>
                {program.title.split(" ").map((word, index) => (
                  <span key={index}>
                    {word}
                    <br />
                  </span>
                ))}
              </h3>

              <p>{program.description}</p>

              <span className="program-arrow">↗</span>

              <span className="program-click">
                VIEW DETAILS
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* MOTIVATION */}
      <section className="motivation">
        <div className="motivation-content">
          <p>YOUR ONLY LIMIT</p>

          <h2>
            IS THE ONE
            <br />
            <span>YOU SET.</span>
          </h2>

          <button
            className="primary-btn"
            onClick={() => setShowJoinForm(true)}
          >
            JOIN THE MOVEMENT →
          </button>
        </div>
      </section>

      {/* TRAINERS */}
      <section className="trainers section" id="trainers">
        <div className="section-label">03 — THE TEAM</div>

        <div className="section-heading">
          <div>
            <p className="small-title">MEET YOUR COACHES</p>

            <h2>
              ELITE <span>TRAINERS.</span>
            </h2>
          </div>
        </div>

        <div className="trainer-grid">
          <div className="trainer-card">
            <div className="trainer-image trainer-one"></div>

            <div className="trainer-info">
              <h3>ARJUN MEHRA</h3>
              <p>STRENGTH & CONDITIONING</p>
            </div>
          </div>

          <div className="trainer-card">
            <div className="trainer-image trainer-two"></div>

            <div className="trainer-info">
              <h3>RIYA SHARMA</h3>
              <p>FUNCTIONAL FITNESS</p>
            </div>
          </div>

          <div className="trainer-card">
            <div className="trainer-image trainer-three"></div>

            <div className="trainer-info">
              <h3>ROHAN PATIL</h3>
              <p>BOXING & HIIT</p>
            </div>
          </div>
        </div>
      </section>

      {/* BMI */}
      <section className="bmi-section section" id="bmi">
        <div className="section-label">04 — FITNESS CHECK</div>

        <div className="bmi-grid">
          <div className="bmi-intro">
            <p className="small-title">KNOW YOUR NUMBERS</p>

            <h2>
              CHECK YOUR
              <br />
              <span>BMI.</span>
            </h2>

            <p>
              Enter your height and weight to get a quick BMI estimate.
              Use it as a starting point for your fitness journey.
            </p>

            <div className="bmi-note">
              <span>i</span>
              BMI is a general screening measure and does not replace
              professional health advice.
            </div>
          </div>

          <div className="bmi-card">
            <form onSubmit={calculateBMI}>
              <div className="input-group">
                <label htmlFor="height">HEIGHT</label>

                <div className="input-wrapper">
                  <input
                    id="height"
                    type="number"
                    min="50"
                    max="250"
                    placeholder="170"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />

                  <span>CM</span>
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="weight">WEIGHT</label>

                <div className="input-wrapper">
                  <input
                    id="weight"
                    type="number"
                    min="10"
                    max="300"
                    placeholder="65"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />

                  <span>KG</span>
                </div>
              </div>

              <button type="submit" className="calculate-btn">
                CALCULATE BMI <span>→</span>
              </button>
            </form>

            {bmi && (
              <div className="bmi-result">
                <div>
                  <small>YOUR BMI</small>
                  <strong>{bmi}</strong>
                </div>

                <div className="bmi-status">
                  <small>STATUS</small>
                  <strong>{bmiStatus}</strong>
                </div>
              </div>
            )}

            {!bmi && bmiStatus && (
              <p className="bmi-error">{bmiStatus}</p>
            )}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery section">
        <div className="section-label">05 — INSIDE IRONFORGE</div>

        <div className="section-heading">
          <div>
            <p className="small-title">THE ENVIRONMENT</p>

            <h2>
              TRAIN IN A <span>BETTER SPACE.</span>
            </h2>
          </div>
        </div>

        <div className="gallery-grid">
          <div className="gallery-item gallery-one"></div>
          <div className="gallery-item gallery-two"></div>
          <div className="gallery-item gallery-three"></div>
          <div className="gallery-item gallery-four"></div>
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section className="membership section" id="membership">
        <div className="section-label">06 — MEMBERSHIP</div>

        <div className="section-heading">
          <div>
            <p className="small-title">CHOOSE YOUR PLAN</p>

            <h2>
              MEMBERSHIP <span>PLANS.</span>
            </h2>
          </div>
        </div>

        <div className="pricing-grid">
          <div className="price-card">
            <p className="plan-name">BASIC</p>

            <h3>
              ₹1,499<span>/MO</span>
            </h3>

            <ul>
              <li>✓ Gym Access</li>
              <li>✓ Cardio Area</li>
              <li>✓ Locker Facility</li>
              <li>✓ Basic Guidance</li>
            </ul>

            <button
              onClick={() => setShowJoinForm(true)}
              className="outline-btn"
            >
              CHOOSE PLAN
            </button>
          </div>

          <div className="price-card featured">
            <div className="popular">MOST POPULAR</div>

            <p className="plan-name">PRO</p>

            <h3>
              ₹2,499<span>/MO</span>
            </h3>

            <ul>
              <li>✓ Everything in Basic</li>
              <li>✓ Personal Training</li>
              <li>✓ Diet Guidance</li>
              <li>✓ Progress Tracking</li>
            </ul>

            <button
              onClick={() => setShowJoinForm(true)}
              className="primary-btn"
            >
              CHOOSE PLAN
            </button>
          </div>

          <div className="price-card">
            <p className="plan-name">ELITE</p>

            <h3>
              ₹3,999<span>/MO</span>
            </h3>

            <ul>
              <li>✓ Everything in Pro</li>
              <li>✓ 1-on-1 Coaching</li>
              <li>✓ Custom Meal Plan</li>
              <li>✓ Priority Support</li>
            </ul>

            <button
              onClick={() => setShowJoinForm(true)}
              className="outline-btn"
            >
              CHOOSE PLAN
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq section">
        <div className="section-label">07 — FAQ</div>

        <div className="faq-container">
          <details>
            <summary>Do you offer a trial workout?</summary>
            <p>
              Yes. Contact us to check the availability of a trial
              session.
            </p>
          </details>

          <details>
            <summary>Do I need previous gym experience?</summary>
            <p>
              Not at all. Our trainers can guide beginners from
              the basics.
            </p>
          </details>

          <details>
            <summary>Do you provide personal training?</summary>
            <p>
              Yes. Personal training is available with our expert
              coaches.
            </p>
          </details>

          <details>
            <summary>What should I bring to the gym?</summary>
            <p>
              Comfortable workout clothes, shoes, a water bottle
              and a positive mindset.
            </p>
          </details>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact section" id="contact">
        <div className="section-label">08 — GET IN TOUCH</div>

        <div className="contact-grid">
          <div>
            <p className="small-title">READY TO START?</p>

            <h2>
              LET'S BUILD
              <br />
              <span>YOUR STRONGER SELF.</span>
            </h2>

            <button
              className="primary-btn"
              onClick={() => setShowJoinForm(true)}
            >
              JOIN NOW →
            </button>
          </div>

          <div className="contact-info">
            <div>
              <small>LOCATION</small>
              <p>Baner Road, Pune, Maharashtra</p>
            </div>

            <div>
              <small>CALL</small>
              <p>+91 98765 43210</p>
            </div>

            <div>
              <small>EMAIL</small>
              <p>hello@ironforgefitness.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="logo">
          IRON<span>FORGE</span>
        </div>

        <p>© 2026 IRONFORGE FITNESS. ALL RIGHTS RESERVED.</p>
      </footer>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        className="whatsapp"
      >
        <span>◉</span>
        WhatsApp
      </a>

      {/* TOP BUTTON */}
      <a href="#home" className="top-btn">
        ↑
      </a>

      {/* PROGRAM DETAILS MODAL */}
      {selectedProgram && (
        <div
          className="modal-overlay"
          onClick={closeProgram}
        >
          <div
            className="program-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={closeProgram}
            >
              ×
            </button>

            <div className="program-modal-number">
              {selectedProgram.id}
            </div>

            <p className="small-title">PROGRAM DETAILS</p>

            <h2>
              {selectedProgram.title.split(" ").map((word, index) => (
                <span key={index}>
                  {word}{" "}
                </span>
              ))}
            </h2>

            <p className="program-modal-description">
              {selectedProgram.description}
            </p>

            <div className="program-meta">
              <div>
                <small>DURATION</small>
                <strong>{selectedProgram.duration}</strong>
              </div>

              <div>
                <small>LEVEL</small>
                <strong>{selectedProgram.level}</strong>
              </div>
            </div>

            <div className="benefits">
              <p className="benefits-title">KEY BENEFITS</p>

              {selectedProgram.benefits.map((benefit, index) => (
                <div className="benefit-item" key={index}>
                  <span>✓</span>
                  {benefit}
                </div>
              ))}
            </div>

            <button
              className="primary-btn program-join-btn"
              onClick={joinSelectedProgram}
            >
              JOIN THIS PROGRAM →
            </button>
          </div>
        </div>
      )}

      {/* JOIN FORM MODAL */}
      {showJoinForm && (
        <div
          className="modal-overlay"
          onClick={() => setShowJoinForm(false)}
        >
          <div
            className="join-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setShowJoinForm(false)}
            >
              ×
            </button>

            <p className="small-title">START YOUR JOURNEY</p>

            <h2>
              JOIN <span>IRONFORGE.</span>
            </h2>

            <p className="modal-description">
              Fill in your details and our team will contact you
              on WhatsApp.
            </p>

            <form onSubmit={submitJoinForm}>
              <input
                type="text"
                name="name"
                placeholder="FULL NAME"
                value={joinForm.name}
                onChange={handleJoinChange}
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="MOBILE NUMBER"
                value={joinForm.phone}
                onChange={handleJoinChange}
                pattern="[0-9]{10}"
                maxLength="10"
                required
              />

              <select
                name="goal"
                value={joinForm.goal}
                onChange={handleJoinChange}
                required
              >
                <option value="">SELECT FITNESS GOAL</option>
                <option value="Build Muscle">Build Muscle</option>
                <option value="Lose Weight">Lose Weight</option>
                <option value="Improve Fitness">
                  Improve Fitness
                </option>
                <option value="Increase Strength">
                  Increase Strength
                </option>
                <option value="General Fitness">
                  General Fitness
                </option>
              </select>

              <select
                name="program"
                value={joinForm.program}
                onChange={handleJoinChange}
                required
              >
                <option value="">SELECT PROGRAM</option>
                <option value="Strength Training">
                  Strength Training
                </option>
                <option value="Fat Burn">Fat Burn</option>
                <option value="Boxing & HIIT">
                  Boxing & HIIT
                </option>
                <option value="Personal Training">
                  Personal Training
                </option>
              </select>

              <button
                type="submit"
                className="primary-btn modal-submit"
              >
                SEND ENQUIRY ON WHATSAPP →
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

