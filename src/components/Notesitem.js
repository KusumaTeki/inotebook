import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

export default function Notesitem(props) {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  return (
    <>
      <div className="col-md-3 mx-3 my-3">
        <div className="card">
          <div className="card-header">
            <div className="d-flex">
              <div className="p-2 w-100">
                <strong>{note.title}</strong>
              </div>
              <div className="p-2 flex-shrink-1">
                <i
                  className="fa-regular fa-pen-to-square"
                  onClick={() => {
                    updateNote(note)
                    
                  }}
                ></i>
              </div>
              <div className="p-2 flex-shrink-1">
                <i
                  className="fa-solid fa-trash"
                  onClick={() => {deleteNote(note._id)
                    props.showAlert("Deleted Successfully!!!", "success");
                  }}
                ></i>
              </div>
            </div>
          </div>

          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>{note.description}</p>
            </blockquote>
          </div>
          {/* <div className="card-footer d-flex">
          <i className="fa-solid fa-tag"></i>
          <p className=" mx-4 " >{note.tag}</p>
          </div> */}
        </div>
      </div>
    </>
  );
}
