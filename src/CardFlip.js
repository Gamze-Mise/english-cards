import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Button from '@mui/material/Button';


function CardFlip({word, row,increase,decrease,words}) {
  console.log(word)
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div style={{ width: 500,}}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div
          onClick={handleClick}
          style={{
            height: 300,
            width: 300,
            backgroundColor: "#F5B041",
            color: "#212F3D",
            display: "flex",
            flexDirection:"column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "30px",
            margin:"auto"
          }}
        >
             <h1>{word.eng}</h1>
         <h3>"{word.example}"</h3>
        </div>

        <div
          onClick={handleClick}
          style={{
            height: 300,
            width: 300,
            backgroundColor: "#212F3D",
            color: "#FFF",
            display: "flex",
            flexDirection:"column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "30px",
            margin:"auto"
          }}
        >
       
          <h3> {word.tr} </h3>
          
        </div>
      </ReactCardFlip>
      <div  style={{
        
            display: "flex",
            justifyContent: " space-between",
            marginTop: "20px",
            paddingRight:"20px",
            paddingLeft:"20px"
          }}>
        <Button onClick={decrease} variant="contained" color="primary">Prev</Button>
        <Button  onClick={increase} variant="contained" color="primary">Next</Button>
        </div>
    </div>
  );
}

export default CardFlip;
