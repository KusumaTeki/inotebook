import { useState } from "react";
import NoteContext from "./NoteContext";

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
    console.log(json);
    setNotes(json);
  };

  // Add a note
  const addNote = async (title, description, tag) => {
    console.log("Adding a note");
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
    const note = {
      _id: "64ba698f342f06d4ae107fb1",
      user: "64b9235bfef04e5fdbb085b33",
      title: title,
      description: description,
      tag: tag,
      date: "2023-07-21T11:18:39.016Z",
      __v: 0,
    };
    // concat is used to create an array whereas push is used to modify an array.
    setNotes(notes.concat(note));
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
    console.log(json);
    // Logic to delete a note
    console.log("Deleting a node with Id" + id);
    // (deleting note with id and returning all other notes after the deletion)
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });

    setNotes(newNotes);
  };

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    console.log("Editing a note");
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiOTIzNWJmZWYwNGU1ZmRiYjA4NWIzIn0sImlhdCI6MTY4OTkzMTI4MX0.AdOHlfj2WqzsnLx6VaPIkhCiw6LIEpN6gtmlrZoe8oY",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getAllNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
