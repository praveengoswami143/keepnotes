import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    // const value = event.target.value;
    // const name = event.target.value;
    const { name, value } = event.target;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    console.log(note);
  };

  const addEvent = (e) => {
    e.preventDefault();
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <>
      <div className="create_note">
        <div className="row">
          <form>
            <input
              type="text"
              name="title"
              value={note.title}
              onChange={InputEvent}
              placeholder="Title"
              autoComplete="off"
            />
            <textarea
              rows=""
              column=""
              name="content"
              value={note.content}
              onChange={InputEvent}
              placeholder="Write a Note..."
            ></textarea>
            <button onClick={addEvent}>
              <AddIcon className="plus_icon" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateNote;
