import React from "react";

const Advice = ({ advices }) => {
  return (
    <div>
      {advices.reverse().map((advice) => {
        const date = advice.createdAt.split("T");
        return (
          <p className="text-sm mb-1">
            [{date[0]}]: {advice.advice}
          </p>
        );
      })}
    </div>
  );
};

export default Advice;
