import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  let arr = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];
  const [ans, setAns] = useState("");
  return (
    <div id="main">
      <input
        value={name1}
        onChange={(e) => {
          setName1(e.target.value);
        }}
        data-testid="input1"
        name="name1"
      />

      <input
        value={name2}
        onChange={(e) => {
          setName2(e.target.value);
        }}
        data-testid="input2"
        name="name2"
      />

      <button
        onClick={() => {
          let map = new Map();
          for (let i = 0; i < name1.length; i++) {
            if (map.has(name1[i])) {
              map.set(name1[i], map.get(name1[i]) + 1);
            } else {
              map.set(name1[i], 1);
            }
          }

          for (let i = 0; i < name2.length; i++) {
            if (map.has(name2[i])) {
              map.set(name2[i], map.get(name2[i]) - 1);
              if (map.get(name2[i]) == 0) {
                map.delete(name2[i]);
              }
            } else {
              map.set(name2[i], 1);
            }
          }
          let temp = map.values();
          let sum = 0;
          for (let item of temp) {
            sum += item;
          }
          sum %= 6;
          setAns(arr[sum]);
        }}
        data-testid="calculate_relationship"
        name="calculate_relationship"
      >
        Calculate Relationship Future
      </button>

      <button
        onClick={() => {
          setName1("");
          setName2("");
          setAns("");
        }}
        data-testid="clear"
        name="clear"
      >
        Clear
      </button>

      <h3 data-testid="answer">{ans}</h3>
    </div>
  );
};

export default App;
