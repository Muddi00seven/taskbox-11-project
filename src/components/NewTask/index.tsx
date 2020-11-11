import React from "react";
import Button from "../Button/index";
import "./main.css";

export interface props {
  handleSave: () => void;
  handleCancel: () => void;
  inputOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function NewTask(props: props) {
  return (
    <div className="newTaskContainer">
      <h2 className="newTaskHeading">Create a New Task</h2>
      <input
        type="text"
        placeholder="Enter your new task"
        onChange={
          !!props.inputOnChange
            ? (e) => {
                props.inputOnChange!(e);
              }
            : undefined
        }
      ></input>
      <div className="buttonContainer">
        <button className="save-btn" onClick={props.handleSave}>Save</button>
        <button className="cancel-btn" onClick={props.handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}

NewTask.defaultProps = {
  handleSave: () => {
    console.log("saved");
  },
  handleCancel: () => {
    console.log("cancel");
  },
};
