import React from "react";
import uuid from "react-uuid";

const Advice = ({ advices }) => {
  return (
    <div>
      {advices.reverse().map((advice) => {
        const date = advice.createdAt.split("T");
        return (
          <p className="mb-1" key={uuid()}>
            [{date[0]}]: {advice.advice}
          </p>
        );
      })}
    </div>
  );
};

export default Advice;
