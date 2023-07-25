import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

export default function Addnote() {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleOnchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handleAddNote = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
  };

  return (
    <>
      <div className="container my-3">
        <h1>Add a Note</h1>

        <form className="container">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value = {note.title}
              placeholder="Add your title "
              onChange={handleOnchange}
              minLength={3}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value = {note.description}
              rows="3"
              onChange={handleOnchange}
              minLength={5}
              required
              placeholder="Add description"></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              value = {note.tag}
              onChange={handleOnchange}
              minLength={5}
              required
              placeholder="Add a Tag. "
            />
          </div>
          <div className="col-12">
            <button
              type="submit"
              disabled= {note.title.length <3 || note.description.length <5 }
              onClick={handleAddNote}
              className="btn btn-primary">
              Add Note
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
