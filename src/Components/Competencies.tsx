import React, { useState } from "react";
import { competencyIcons } from "./CompetencyIcons";
import { CompetencyList } from "../styles/Competencies";

const Competencies = () => {
  // todo :: change this out for Context-based state
  const [res, setRes] = useState<"low" | "high">("low");

  return (
    <div>
      <h4>Competencies</h4>
      <CompetencyList>
        {competencyIcons.map((icon, index) => (
          <li key={icon.title + index}>
            <span>
              <img src={res === "low" ? icon.low : icon.high} />
              {icon.title}
            </span>
          </li>
        ))}
      </CompetencyList>
    </div>
  );
};

export default Competencies;
