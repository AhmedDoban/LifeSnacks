"use client";
import { useState } from "react";
import "./FQDropdown.css";
import FQBox from "./FQBox";

function FQDropdown() {
  const [Questions, SetQuestions] = useState([
    {
      question: "Which countries do you ship to?",
      answer:
        "We ship to over 50 countries around the world. You can find the full list in the country selector at the top left corner of our website",
      open: false,
    },
    {
      question: "Which countries do you ship to?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
      open: true,
    },
    {
      question: "Which countries do you ship to?",
      answer:
        "We ship to over 50 countries around the world. You can find the full list in the country selector at the top left corner of our website",
      open: false,
    },
    {
      question: "Which countries do you ship to?",
      answer:
        "We ship to over 50 countries around the world. You can find the full list in the country selector at the top left corner of our website",
      open: false,
    },
    {
      question: "Which countries do you ship to?",
      answer:
        "We ship to over 50 countries around the world. You can find the full list in the country selector at the top left corner of our website",
      open: false,
    },
  ]);
  return (
    <div className="FQDropdown">
      <div className="container">
        <div className="info">
          <span>FAQ</span>
          <h1>Frequently Asked Questions</h1>
        </div>
        <div className="questions-container">
          {Questions.map((que, index) => (
            <FQBox key={index} question={que} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default FQDropdown;
