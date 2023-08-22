import React, { useEffect } from "react";
import clsx from "clsx";
import { useState } from "react";

const Form = ({ ranking }) => {
  const [userAdvice, setUserAdvice] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (ranking === "Master Rizz") {
      setDisabled(false);
    }
  }, []);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const res = await fetch(`${window.location.href}/api/advice`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userAdvice }),
      });
      if (!res.ok) {
        console.error("error posting", res.status);
      }
      event.target.reset();
      setDisabled(true);
      console.log(disabled);
    } catch (error) {
      console.error(error.messsge);
    }
  };

  return (
    <form
      className="flex items-center justify-center flex-col mt-5"
      onSubmit={(event) => handleSubmit(event)}
    >
      <fieldset disabled={disabled === true} className="w-full">
        <div
          className={clsx("grid w-full grid-flow-col", {
            "justify-between": ranking !== "Master Rizz",
          })}
        >
          {ranking !== "Master Rizz" && (
            <span className="text-sm text-red-500 mr-2">
              You must be a Master Rizzer to leave your advice
            </span>
          )}
          <span className="text-sm justify-self-end">
            {userAdvice.length}/300
          </span>
        </div>
        <textarea
          name="advice"
          id="advice"
          rows="3"
          maxLength={300}
          onChange={(e) => setUserAdvice(e.target.value)}
          className="w-full bg-transparent outline-1 outline-black outline p-2 resize-none"
        ></textarea>
        <button
          type="submit"
          className="mt-2 text-lg py-1 w-28 outline outline-2 rounded-md"
        >
          Submit
        </button>
      </fieldset>
    </form>
  );
};

export default Form;
