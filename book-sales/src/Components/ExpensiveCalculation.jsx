import React, { useMemo } from "react";

function ExpensiveCalculation({ num }) {
  const calculate = (num) => {
    console.log("Calculating...");
    return num * 2;
  };

  const result = useMemo(() => calculate(num), [num]);

  return <p>Result: {result}</p>;
}

export default ExpensiveCalculation;
