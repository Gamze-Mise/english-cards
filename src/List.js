import React, { useState } from "react";
import { Button, setRef } from "@mui/material";
import CardInput from "./CardInput";
import CardFlip from "./CardFlip";

export default function List() {
  const [words, setWords] = useState([
    { id: 1, eng: "bring", tr: "getirmek", example: "bring it" },
    { id: 2, eng: "go", tr: "gitmek", example: "go home" },
    { id: 3, eng: "come", tr: "gelmek", example: "come to mama" },
  ]);
  const [process, setProcess] = useState(true);
  const wordCard = () => {
    setProcess(true);
  };
  const AddWord = () => {
    setProcess(false);
  };
  const [row, setRow] = useState(1);
  const Increase = () => {
    if(row==words.length){
        setRow(1)
    }else{
       setRow((prevState) => prevState + 1); 
    }
    
  };
  const Decrease = () => {
    if(row==1){
        setRow(words.length)
    }else{
        setRow((prevState) => prevState - 1);
    }
    
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "30px",
          marginTop: "15px",
        }}
      >
        <Button
          style={{ width: "150px" }}
          onClick={wordCard}
          variant="contained"
          color="secondary"
        >
          Word Cards
        </Button>
        <Button
          style={{ width: "150px" }}
          onClick={AddWord}
          variant="contained"
          color="secondary"
        >
          Add a Word
        </Button>
      </div>
      {process ? (
        words.map((word) => {
          if (word.id === row) {
            return (
              <CardFlip
                key={word.id}
                word={word}
                increase={Increase}
                decrease={Decrease}
                row={row}
                words={words}
              />
            );
          }
        })
      ) : (
        <CardInput words={words} setWords={setWords}/>
      )}
    </div>
  );
}
