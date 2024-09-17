import { useState } from "react";
import NoteContext from "./NoteContext";
import { json } from "react-router-dom";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const initialNotes = [];
  const [notes, setNotes] = useState(initialNotes);
  // Get All Notes
  const getAllNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiOTIzNWJmZWYwNGU1ZmRiYjA4NWIzIn0sImlhdCI6MTY4OTkzMTI4MX0.AdOHlfj2WqzsnLx6VaPIkhCiw6LIEpN6gtmlrZoe8oY",
      },
      body: JSON.stringify(),
    });
    const json = await response.json();

    setNotes(json);
  };

  // Add a note
  const addNote = async (title, description, tag) => {
    // TODO : API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiOTIzNWJmZWYwNGU1ZmRiYjA4NWIzIn0sImlhdCI6MTY4OTkzMTI4MX0.AdOHlfj2WqzsnLx6VaPIkhCiw6LIEpN6gtmlrZoe8oY",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    // Logic to add a  Note
    const note = await response.json();
    setNotes(notes.concat(note)); // concat is used to create an array whereas push is used to modify an array.
  };

  // Delete a note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiOTIzNWJmZWYwNGU1ZmRiYjA4NWIzIn0sImlhdCI6MTY4OTkzMTI4MX0.AdOHlfj2WqzsnLx6VaPIkhCiw6LIEpN6gtmlrZoe8oY",
      },
      body: JSON.stringify(),
    });
    const json = response.json();

    // Logic to delete a note

    // (deleting note with id and returning all other notes after the deletion)
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });

    setNotes(newNotes);
  };

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiOTIzNWJmZWYwNGU1ZmRiYjA4NWIzIn0sImlhdCI6MTY4OTkzMTI4MX0.AdOHlfj2WqzsnLx6VaPIkhCiw6LIEpN6gtmlrZoe8oY",
      },
      body: JSON.stringify({ id, title, description, tag }),
    });
    const json = response.json();
    
    // Logic to edit in client
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getAllNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
