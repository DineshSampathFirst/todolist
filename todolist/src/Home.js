import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import { BsFillCheckCircleFill, BsCircleFill, BsFillTrashFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id) => {
    axios
      .put("http://localhost:3002/update/" + id)
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3002/delete/" + id)
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '40px auto',
      padding: '30px',
      borderRadius: '12px',
      backgroundColor: '#fff',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Segoe UI, sans-serif',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '25px',
      fontSize: '2rem',
      color: '#333',
    },
    task: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#f9f9f9',
      padding: '12px 16px',
      marginBottom: '12px',
      borderRadius: '8px',
    },
    checkbox: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
    },
    taskText: {
      marginLeft: '10px',
      fontSize: '16px',
    },
    lineThrough: {
      textDecoration: 'line-through',
      color: '#999',
    },
    icon: {
      fontSize: '20px',
      color: '#4b5563',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📝 Todo App</h1>
      <Create />
      {todos.length === 0 ? (
        <h2 style={{ textAlign: 'center', color: '#888' }}>No Records</h2>
      ) : (
        <AnimatePresence>
          {todos.map((todo) => (
            <motion.div
              key={todo._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              style={styles.task}
            >
              <div style={styles.checkbox} onClick={() => handleEdit(todo._id)}>
                {todo.done ? (
                  <BsFillCheckCircleFill style={styles.icon} />
                ) : (
                  <BsCircleFill style={styles.icon} />
                )}
                <p
                  style={{
                    ...styles.taskText,
                    ...(todo.done ? styles.lineThrough : {}),
                  }}
                >
                  {todo.task}
                </p>
              </div>
              <BsFillTrashFill
                style={{ ...styles.icon, color: '#ef4444' }}
                onClick={() => handleDelete(todo._id)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      )}
    </div>
  );
}

export default Home;
