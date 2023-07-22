import React from "react";

export default function Notesitem(props) {
  const { note } = props;
  return (
    <>
      <div className="col my-3 ">
        <div className="card my-3 px-3 py-3">
          <div className="card-body ">
            <div className="d-flex">
              <div className="p-2 flex-grow-1 ">
                <h5 className="card-title">{note.title}</h5>
              </div>
              <div className="p-2  ">
                <i className="fa-regular fa-pen-to-square "></i>
              </div>
              <div className="p-2  ">
                <i className="fa-solid fa-trash "></i>
              </div>
            </div>
            {/* <FontAwesomeIcon icon="fa-light fa-pen-to-square" /> */}
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </>
  );
}
