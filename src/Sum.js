import React from "react";

export function Sum(props){

  let sum = 0;
  props.numbers.forEach((element) => {sum += element});

  return(
    <h1>The Sum: {sum}</h1>
  )
}