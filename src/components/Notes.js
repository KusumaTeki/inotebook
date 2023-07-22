import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import Notesitem from "./Notesitem";

export default function Notes() {
  const context = useContext(NoteContext);
  const { notes, setNotes } = context;
// const [notes, setNotes] = useState(context);

  return (
    <>
      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((note) => {
          return <Notesitem note={note}/>
        })}
      </div>
    </>
  );
}
