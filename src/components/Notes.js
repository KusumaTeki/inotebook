import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/NoteContext";
import Notesitem from "./Notesitem";
import Addnote from "./Addnote";

export default function Notes() {
  const context = useContext(NoteContext);
  const { notes, getAllNotes } = context;
  useEffect(() => {
    getAllNotes()
  }, []);
// const [notes, setNotes] = useState(context);

  return (
    <>
    <Addnote/>
      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((note) => {
          return <Notesitem key={note._id} note={note}/>
        })}
      </div>
    </>
  );
}
