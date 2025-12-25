import React, { useState } from "react";

const App = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [ans, setAns] = useState("");

  const values = [
    "Siblings",
    "Friends",
    "Love",
    "Affection",
    "Marriage",
    "Enemy",
  ];

  function handleChange1(e) {
    let val = e.target.value;
    setInput1(val);
  }

  function handleChange2(e) {
    let val = e.target.value;
    setInput2(val);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let arr1 = input1.trim().split("");
    let arr2 = input2.trim().split("");
    if (arr1.length == 0 || arr2.length == 0) {
      setAns("Please Enter valid input");
      return;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.includes(arr1[i])) {
        arr2[arr2.indexOf(arr1[i])] = "";
        arr1[i] = "";
      }
    }
    let input1Len = arr1.join("").trim().length;
    let input2Len = arr2.join("").trim().length;
    let ansIndex = input1Len + (input2Len % 6);
    setAns(values[ansIndex]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter first name" data-testid="input1" name="name1" onChange={handleChange1}/>
      <input type="text" placeholder="Enter second name" data-testid="input2" name="name2" onChange={handleChange2}/>
      <button data-testid="calculate_relationship" name="calculate_relationship" type="submit">Calculate Relationship Future</button>
      <button data-testid="clear" name="clear" type="reset">Clear</button>
      <h3 data-testid="answer">{ans}</h3>
    </form>
  ); // prettier-ignore
};

export default App;
