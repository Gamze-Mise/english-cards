import React, { useState } from "react";
import { Button } from "@mui/material";
import CardInput from "./CardInput";
import CardFlip from "./CardFlip";
import wordsData from "./data/words.json";

export default function List() {
  const [words, setWords] = useState(wordsData);
  const [process, setProcess] = useState(true);
  const wordCard = () => {
    setProcess(true);
  };
  const AddWord = () => {
    setProcess(false);
  };

  const handleWordAdded = (newWordId) => {
    setRow(newWordId);
  };
  const [row, setRow] = useState(1);
  const Increase = () => {
    if (row === words.length) {
      setRow(1)
    } else {
      setRow((prevState) => prevState + 1);
    }

  };
  const Decrease = () => {
    if (row === 1) {
      setRow(words.length)
    } else {
      setRow((prevState) => prevState - 1);
    }

  };
  return (
    <div style={{ minHeight: "500px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "15px",
          marginTop: "15px",
        }}
      >
        <Button
          style={{
            paddingLeft: "15px",
            paddingRight: "15px",
            paddingTop: "8px",
            paddingBottom: "8px",
            borderRadius: "15px",
            fontSize: "0.9rem",
            fontWeight: "600",
            background: process ? "rgb(156, 39, 176)" : "rgb(156, 39, 176)",
            boxShadow: process ? "0 4px 12px rgba(156, 39, 176, 0.4)" : "0 4px 12px rgba(156, 39, 176, 0.4)",
            border: process ? "2px solid rgb(142, 36, 170)" : "2px solid rgb(142, 36, 170)",
            color: "white",
            cursor: "pointer",
            transition: "all 0.3s ease"
          }}
          onClick={wordCard}
          variant="contained"
        >
          📚 Word Cards
        </Button>
        <Button
          style={{
            paddingLeft: "15px",
            paddingRight: "15px",
            paddingTop: "8px",
            paddingBottom: "8px",
            borderRadius: "15px",
            fontSize: "0.9rem",
            fontWeight: "600",
            background: !process ? "rgb(156, 39, 176)" : "rgb(156, 39, 176)",
            boxShadow: !process ? "0 4px 12px rgba(156, 39, 176, 0.4)" : "0 4px 12px rgba(156, 39, 176, 0.4)",
            border: !process ? "2px solid rgb(142, 36, 170)" : "2px solid rgb(142, 36, 170)",
            color: "white",
            cursor: "pointer",
            transition: "all 0.3s ease"
          }}
          onClick={AddWord}
          variant="contained"
        >
          Add a Word
        </Button>
      </div>

      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
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
                  setRow={setRow}
                />
              );
            }
            return null;
          })
        ) : (
          <CardInput words={words} setWords={setWords} onWordAdded={handleWordAdded} />
        )}
      </div>
    </div>
  );
}
