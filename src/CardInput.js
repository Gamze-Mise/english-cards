import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

function CardInput({words, setWords}) {
    const [input,setInput]=useState({id:null,eng:"",tr:"",example:""});
    const changeEng=(e)=>{
        setInput({...input,eng:e.target.value.toLowerCase()})
    }
    const changeTr=(e)=>{
        setInput({...input,tr:e.target.value.toLowerCase()})
    }
    const changeExample=(e)=>{
        setInput({...input,example:e.target.value.toLowerCase(),id:words.length+1})
        
    }
    const AddHandler=(e)=>{
        setWords([...words,input])
        setInput({id:null,eng:"",tr:"",example:""})
    }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TextField value={input.eng} onChange={changeEng}
        style={{ width: "500px", marginTop: "15px" }}
        id="outlined-basic"
        label="English"
        variant="outlined"
      />
      <TextField  value={input.tr} onChange={changeTr}
        style={{ width: "500px", marginTop: "15px" }}
        id="outlined-basic"
        label="Turkish"
        variant="outlined"
      />
      <TextField value={input.example} onChange={changeExample}
        style={{ width: "500px", marginTop: "15px" }}
        id="outlined-basic"
        label="Example"
        variant="outlined"
      />
      <Button onClick={(e)=>{AddHandler(e)}}  style={{ width: "500px", marginTop: "15px" }} variant="contained">
        Add
      </Button>
    </div>
  );
}

export default CardInput;
