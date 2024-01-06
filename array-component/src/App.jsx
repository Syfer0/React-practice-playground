import { useState } from "react";

const INITIAL_VALUE = ["A", "B", "C"];

function App() {
  const [array, setArray] = useState(INITIAL_VALUE);
  const [value, setValue] = useState("");

  function removeFirstElement() {
    setArray((cuurentArray) => {
      return cuurentArray.slice(1);
    });
  }

  function removeSpecificLetter(specificletter) {
    setArray((currentArray) => {
      return currentArray.filter((element) => element !== specificletter);
    });
  }

  function addLetterToStart(letter) {
    setArray((currentArray) => {
      return [letter, ...currentArray];
    });
  }

  function addLetterToEnd(letter) {
    setArray((currentArray) => {
      return [...currentArray, letter];
    });
  }

  function clear() {
    setArray([]);
  }

  function reset() {
    setArray(INITIAL_VALUE);
  }

  function updateAToH() {
    setArray((currentArray) => {
      return currentArray.map((element) => {
        if (element === "A") return "H";
        return element;
      });
    });
  }

  function addLetterAtIndex(letter, index) {
    setArray((currentArray) => {
      return [
        ...currentArray.slice(0, index),
        letter,
        ...currentArray.slice(index),
      ];
    });
  }

  {
    /*Define a function removeFirstElement that removes the first element from the array.
Remove Specific Letter:


Define a function removeSpecificLetter(letter) that removes all occurrences of the specified letter from the array.
Add Letter to Start:

Define a function addLetterToStart(letter) that adds the specified letter to the beginning of the array.
Add Letter to End:

Define a function addLetterToEnd(letter) that adds the specified letter to the end of the array.
Clear Array:

Define a function clear that sets the array to an empty array.
Reset Array:

Define a function reset that sets the array back to the initial value (INITIAL_VALUE).
Update "A" to "H":

Define a function updateAToH that updates all occurrences of "A" in the array to "H".
Add Letter at Index:

Define a function addLetterAtIndex(letter, index) that adds the specified letter at the specified index in the array*/
  }

  return (
    <div>
      <button onClick={removeFirstElement}>Remove First Element</button>
      <br />
      <button onClick={() => removeSpecificLetter("B")}>Remove All B's</button>
      <br />
      <button onClick={() => addLetterToStart("B")}>Add To Start</button>
      <br />
      <button onClick={() => addLetterToEnd("Z")}>Add To End</button>
      <br />
      <button onClick={clear}>Clear</button>
      <br />
      <button onClick={reset}>Reset</button>
      <br />
      <button onClick={updateAToH}>Update A To H</button>
      <br />
      <button onClick={() => addLetterAtIndex("C", 2)}>Add C At 2</button>
      <br />
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <br />
      <button onClick={() => addLetterToStart(value)}>
        Add Value To Array
      </button>
      <br />
      {array.join(", ")}
    </div>
  );
}

export default App;
