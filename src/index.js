import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img className="avatar" src="guy_riddler.jpg" alt="Guy Stewart Riddler" />
  );
}

function Intro() {
  return (
    <div>
      <h1>Guy Stewart Riddler</h1>
      <p>
        Full-stack web developer. Emplyed the past 26 years at the 22nd Circuit
        Court City of St. Louis where he served as a their computer instructor,
        then rehired as their application developer. I like video gaming,
        playing golf, and enjoying activities with my friends.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="Java" emoji="💪" color="blue" textcolor="white" />
      <Skill skill="Javascript" emoji="💪" color="orange" />
      <Skill skill="React" emoji="💪" color="yellow" />
      <Skill skill="HTML+CSS" emoji="💪" color="orangered" />
    </div>
  );
}

function Skill(props) {
  return (
    <div
      className="skill"
      style={{ backgroundColor: props.color, color: props.textcolor }}
    >
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
