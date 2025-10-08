import React, { useState } from "react";
import { TextField, Button, Snackbar, Alert } from "@mui/material";

function CardInput({ words, setWords, onWordAdded }) {
  const [input, setInput] = useState({ id: null, eng: "", tr: "", example: "" });
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });
  const changeEng = (e) => {
    setInput({ ...input, eng: e.target.value.toLowerCase() })
  }
  const changeTr = (e) => {
    setInput({ ...input, tr: e.target.value.toLowerCase() })
  }
  const changeExample = (e) => {
    setInput({ ...input, example: e.target.value.toLowerCase(), id: words.length + 1 })

  }
  const AddHandler = (e) => {
    // Validation
    if (!input.eng.trim() || !input.tr.trim() || !input.example.trim()) {
      setSnackbar({
        open: true,
        message: "Lütfen tüm alanları doldurun!",
        severity: "error"
      });
      return;
    }

    // Check if word already exists
    const wordExists = words.some(word =>
      word.eng.toLowerCase() === input.eng.toLowerCase()
    );

    if (wordExists) {
      setSnackbar({
        open: true,
        message: "Bu kelime zaten mevcut!",
        severity: "error"
      });
      return;
    }

    // Add word successfully
    const newWord = { ...input, id: words.length + 1 };
    setWords([...words, newWord]);
    setInput({ id: null, eng: "", tr: "", example: "" });
    setSnackbar({
      open: true,
      message: "Kelime başarıyla eklendi!",
      severity: "success"
    });

    // Notify parent component about the new word
    if (onWordAdded) {
      onWordAdded(newWord.id);
    }
  }

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  }
  return (
    <div>
      <div style={{
        height: "250px",
        width: "250px",
        backgroundColor: "#F5B041",
        color: "#212F3D",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "30px",
        margin: "auto",
        boxShadow: "0 8px 32px rgba(0,0,0,0.2)"
      }}>
        <h2 style={{
          color: "#212F3D",
          marginBottom: "20px",
          fontSize: "1.2rem",
          fontWeight: "600",
          textAlign: "center",
          textShadow: "1px 1px 2px rgba(255,255,255,0.5)"
        }}>
          Add New Word
        </h2>

        <TextField
          value={input.eng}
          onChange={changeEng}
          style={{
            marginBottom: "8px",
            width: "180px",
            backgroundColor: "rgba(255,255,255,0.9)",
            borderRadius: "10px"
          }}
          label="English"
          variant="outlined"
          size="small"
        />

        <TextField
          value={input.tr}
          onChange={changeTr}
          style={{
            marginBottom: "8px",
            width: "180px",
            backgroundColor: "rgba(255,255,255,0.9)",
            borderRadius: "10px"
          }}
          label="Turkish"
          variant="outlined"
          size="small"
        />

        <TextField
          value={input.example}
          onChange={changeExample}
          style={{
            marginBottom: "10px",
            width: "180px",
            backgroundColor: "rgba(255,255,255,0.9)",
            borderRadius: "10px"
          }}
          label="Example"
          variant="outlined"
          size="small"
          multiline
          rows={1}
        />

      </div>

      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "20px",
        gap: "20px"
      }}>
        <Button
          style={{
            borderRadius: "25px",
            padding: "10px 25px",
            fontSize: "1rem",
            fontWeight: "600",
            background: "rgb(0, 188, 212)",
            boxShadow: "0 4px 15px rgba(0, 188, 212, 0.3)",
            color: "#212F3D",
            opacity: 0
          }}
          variant="contained"
        >
          ◀ Prev
        </Button>
        <Button
          onClick={(e) => { AddHandler(e) }}
          style={{
            borderRadius: "25px",
            padding: "10px 25px",
            fontSize: "1rem",
            fontWeight: "600",
            background: "rgb(0, 188, 212)",
            boxShadow: "0 4px 15px rgba(0, 188, 212, 0.3)",
            color: "white",
            textTransform: "none",
            width: "250px"
          }}
          variant="contained"
        >
          Add
        </Button>
        <Button
          style={{
            borderRadius: "25px",
            padding: "10px 25px",
            fontSize: "1rem",
            fontWeight: "600",
            background: "rgb(0, 188, 212)",
            boxShadow: "0 4px 15px rgba(0, 188, 212, 0.3)",
            color: "#212F3D",
            opacity: 0
          }}
          variant="contained"
        >
          Next ▶
        </Button>
      </div>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default CardInput;
