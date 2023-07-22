import { useState } from "react";
import NoteContext from "./NoteContext";


const NoteState = (props) => {
  const initialNotes=
  [
    {
      "_id": "64ba4e68df91106744e154b3",
      "user": "64b9235bfef04e5fdbb085b3",
      "title": "My 2nd note",
      "description": "This is  second time me Creating something like this.Super excited.",
      "tag": "Happy",
      "date": "2023-07-21T09:22:48.356Z",
      "__v": 0
    },
    {
      "_id": "64ba4e7adf91106744e154b5",
      "user": "64b9235bfef04e5fdbb085b3",
      "title": "My 3rd note",
      "description": "This is third time me Creating something like this.Super excited.",
      "tag": "Happy",
      "date": "2023-07-21T09:23:06.169Z",
      "__v": 0
    },
    {
      "_id": "64ba53212a6b5a50cc82cf7b",
      "user": "64b9235bfef04e5fdbb085b3",
      "title": "My 1st  note",
      "description": "This is 1st time me Creating something like this.Super excited.",
      "tag": "Happy",
      "date": "2023-07-21T09:42:57.629Z",
      "__v": 0
    },
    {
      "_id": "64ba648053e99179440b6c24",
      "user": "64b9235bfef04e5fdbb085b3",
      "title": "Newnode 2",
      "description": "This is meant to be deleted.",
      "tag": "Happy",
      "date": "2023-07-21T10:57:04.301Z",
      "__v": 0
    },
    {
      "_id": "64ba698f342f06d4ae107fb1",
      "user": "64b9235bfef04e5fdbb085b3",
      "title": "Kuch BHi",
      "description": "This is meant to be deleted.",
      "tag": "Happy",
      "date": "2023-07-21T11:18:39.016Z",
      "__v": 0
    }
  ]
const [notes, setNotes] = useState(initialNotes);
  return (
    <NoteContext.Provider value={{notes, setNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
