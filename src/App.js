import { useState } from "react";
import "./App.css";
import data from "./data";

function App() {
  return (
    <div className="container">
      <Accordian data={data} />
    </div>
  );
}

function Accordian({ data }) {
  const [currentOpen, setCurrentOpen] = useState(false);
  return (
    <div>
      {data.map((el, num) => {
        return (
          <AccordianItem
            key={num}
            title={el.title}
            text={el.text}
            num={num}
            curOpen={currentOpen}
            setCurOpen={setCurrentOpen}
          />
        );
      })}
    </div>
  );
}

function AccordianItem({ title, text, curOpen, setCurOpen, num }) {
  const isOpen = num === curOpen;
  const handleToggle = () => {
    setCurOpen(isOpen ? null : num);
  };
  return (
    <div className={`header ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <div className="title">
        <h2>{title}</h2>
        <p className="icon">{isOpen ? "-" : "+"}</p>
        {isOpen && <p className="content">{text}</p>}
      </div>
    </div>
  );
}

export default App;
