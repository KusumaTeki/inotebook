import React from "react";

export default function Notesitem(props) {
  const { note } = props;
  return (
    <>
      
     
      <div className="col my-3">
        <div class="card my-3">
          <div class="card-body">
            <h5 class="card-title">{note.title}</h5>
            <p class="card-text">
            {note.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
