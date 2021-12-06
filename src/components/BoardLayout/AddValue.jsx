import React from "react";
import firebase from "firebase";

export function AddValue  () {
  const [value, setValue] = React.useState("");
  const db = firebase.firestore();
  const getValue = (event) => {
    setValue(event.target.value);
  };

  const addValue = () => {
    db.collection("values")
      .doc(value)
      .set({
        value: value,
      })
      .then(function () {
        console.log("Value successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing Value: ", error);
      });
  };

  return (
    <div>
      <input onBlur={getValue} type="text" />
      <button type="button" onClick={addValue}>
        Add
      </button>
    </div>
  );
};

