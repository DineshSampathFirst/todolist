import React, { useState } from "react";
import axios from "axios";

function Create() {
  const [task, setTask] = useState();

  const handleAdd = () => {
    axios
      .post("http://localhost:3002/add", { task: task })
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  const styles = {
    form: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '24px',
    },
    input: {
      padding: '12px 18px',
      borderRadius: '10px',
      border: '1px solid #d1d5db', // light gray
      fontSize: '16px',
      width: '60%',
      outline: 'none',
      backgroundColor: '#f9fafb', // soft light background
      color: '#111827', // near black text
      transition: 'all 0.2s ease',
    },
    inputFocus: {
      border: '1px solid #6366f1', // indigo
      boxShadow: '0 0 0 3px rgba(99, 102, 241, 0.2)',
    },
    button: {
      padding: '12px 24px',
      backgroundColor: '#6366f1', // indigo-500
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#4f46e5', // indigo-600
    },
  };

  return (
    <div style={styles.form}>
      <input
        type="text"
        placeholder="Add a new task..."
        onChange={(e) => setTask(e.target.value)}
        style={styles.input}
      />
      <button type="button" onClick={handleAdd} style={styles.button}>
        Add
      </button>
    </div>
  );
}

export default Create;
