import Note from "./components/Note";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import noteService from "../../services/noteService";
import "./Home.css";

const Home = () => {
  const [note, setNote] = useState("");
  const [noteIdx, setNoteIdx] = useState(-1);
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const initNotes = await noteService.getAllPublish();
        const initNotesContent = initNotes.map((note) => note.content);
        setNotes(initNotesContent);
        if (initNotes.length > 0) {
          const randomIndex = Math.floor(Math.random() * initNotes.length);
          setNoteIdx(randomIndex);
          setNote(initNotesContent[randomIndex]);
        }
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };
    fetchNotes();
  }, []);

  const changeNote = () => {
    if (notes.length > 0 && noteIdx !== -1) {
      var cnt = 0;
      var randomIndex = Math.floor(Math.random() * notes.length);
      while (randomIndex === noteIdx && cnt <= 3) {
        randomIndex = Math.floor(Math.random() * notes.length);
        ++cnt;
      }
      setNote(notes[randomIndex]);
      setNoteIdx(randomIndex);
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
