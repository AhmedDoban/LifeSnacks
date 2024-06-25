"use client";
import { useState } from "react";

function FQBox({ question }) {
  const [Open, SetOpen] = useState(question.open);
  return (
    <div className={Open ? "FQBox open" : "FQBox"}>
      <h1>
        <span>{question.question}</span>

        <i
          className="fa-solid fa-arrow-down"
          onClick={() => SetOpen(!Open)}
        ></i>
      </h1>
      <p>{question.answer}</p>
    </div>
  );
}
export default FQBox;
