import React from "react";

const Advice = ({ advices }) => {
  return (
    <div>
      {advices.map((advice) => {
        return (
          <p>
            [{advice.createdAt}]: {advice.advice}
          </p>
        );
      })}
    </div>
  );
};

export default Advice;
