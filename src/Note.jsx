import React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const Note = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };

  return (
    <>
      <div className="notes">
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <br />
        <button className="delbtn" onClick={deleteNote}>
          <DeleteOutlineIcon />
        </button>
      </div>
    </>
  );
};
export default Note;
