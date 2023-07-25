import React, { useContext, useEffect, useRef, useState } from "react";
// import {*} from "react";
import NoteContext from "../context/notes/NoteContext";
import Notesitem from "./Notesitem";
import Addnote from "./Addnote";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, getAllNotes, editNote } = context;
  useEffect(() => {
    getAllNotes();
  });

  const ref = useRef("");
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "default",
  });

  const handleOnchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const refClose = useRef("");
  const handleClick = (e) => {
    ref.current.click();
    editNote(note.id, note.etitle, note.edescription, note.etag);
    e.preventDefault();
  };
  return (
    <>
      <Addnote />

      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="container">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    placeholder="Add your title "
                    onChange={handleOnchange}
                    minLength={3} required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}
                    rows="3"
                    onChange={handleOnchange}
                    minLength={5} required
                    placeholder="Add description"></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={handleOnchange}
                    minLength={5} required
                    placeholder="Add a Tag. "
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                disabled= {note.etitle.length===0 || note.edescription.length===0  }
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal">
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick}>
                Update the note
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h2>Your Notes</h2>
        <div className="mx-4">
          {notes.length === 0 && "NO notes to display"}
        </div>
        {notes.map((note) => {
          return (
            <Notesitem key={note._id} note={note} updateNote={updateNote} />
          );
        })}
      </div>
    </>
  );
};
export default Notes;
