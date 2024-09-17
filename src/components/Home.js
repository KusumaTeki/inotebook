import React from "react";
import Notes from "./Notes";
import Addnote from "./Addnote";

export default function Home(props) {
  const {showAlert} = props
  return (
    <>
    
      <Notes showAlert={showAlert} />
    </>
  );
}
