import Note from "./Note";
import Header from "./Header";
import { useState, useEffect } from "react";
import noteService from "../services/noteService";
import "./Home.css";

const Home = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const initNotes = await noteService.getAllPublish();
        setNotes(initNotes);
        if (initNotes.length > 0) {
          const randomIndex = Math.floor(Math.random() * initNotes.length);
          setNote(initNotes[randomIndex]);
        }
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };
    fetchNotes();
  }, []);

  const changeNote = () => {
    if (notes.length > 0) {
      const randomIndex = Math.floor(Math.random() * notes.length);
      setNote(notes[randomIndex]);
    }
  };

  return (
    <div className="home-container">
      <Header handleTitleClick={changeNote} />
      <Note note={note}></Note>
    </div>
  );
};

export default Home;
