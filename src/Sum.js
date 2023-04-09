import React from "react";

export function Sum({ numbers = [1,2,3] }){

  let sum = 0;
  numbers.forEach((element) => {sum += element});

  return(
    <h1>The Sum: {sum}</h1>
  )
}