import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Button from '@mui/material/Button';


function CardFlip({ word, row, increase, decrease, words, setRow }) {
  console.log(word)
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleRandom = () => {
    const randomId = Math.floor(Math.random() * words.length) + 1;
    setRow(randomId);
    setIsFlipped(false); // Reset flip state
  };
  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div
          onClick={handleClick}
          style={{
            height: 250,
            width: 250,
            backgroundColor: "#F5B041",
            color: "#212F3D",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "30px",
            margin: "auto"
          }}
        >
          <h1 style={{ color: "#212F3D" }}>{word.eng}</h1>
          <h3 style={{ textAlign: "center", color: "#212F3D" }}>"{word.example}"</h3>
        </div>

        <div
          onClick={handleClick}
          style={{
            height: 250,
            width: 250,
            backgroundColor: "#212F3D",
            color: "#FFF",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "30px",
            margin: "auto"
          }}
        >
          <h3 style={{ color: "#F5B041" }}> {word.tr} </h3>
        </div>
      </ReactCardFlip>
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "20px",
        gap: "10px"
      }}>
        <Button
          onClick={decrease}
          variant="contained"
          color="secondary"
          style={{
            borderRadius: "20px",
            padding: "8px 15px",
            fontSize: "0.9rem",
            fontWeight: "600",
            background: "rgb(0, 188, 212)",
            boxShadow: "0 4px 15px rgba(0, 188, 212, 0.3)"
          }}
        >
          ◀ Prev
        </Button>
        <Button
          onClick={handleRandom}
          variant="contained"
          color="secondary"
          style={{
            borderRadius: "20px",
            padding: "8px 12px",
            fontSize: "0.9rem",
            fontWeight: "600",
            background: "rgb(0, 188, 212)",
            boxShadow: "0 4px 15px rgba(0, 188, 212, 0.3)"
          }}
        >
          🎲 Shuffle
        </Button>
        <Button
          onClick={increase}
          variant="contained"
          color="secondary"
          style={{
            borderRadius: "20px",
            padding: "8px 15px",
            fontSize: "0.9rem",
            fontWeight: "600",
            background: "rgb(0, 188, 212)",
            boxShadow: "0 4px 15px rgba(0, 188, 212, 0.3)"
          }}
        >
          Next ▶
        </Button>
      </div>
    </div>
  );
}

export default CardFlip;
