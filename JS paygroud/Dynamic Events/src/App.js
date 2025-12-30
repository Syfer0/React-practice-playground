function App() {
  function handleClick() {
    let radomnum = math.floor(math.random() * 3) + 1;
    console.log(random);
    let userinput = prompt("type the number");
    alert(`computer number, ${radomnum}, yourguess : ${userinput}`);
  }
  return (
    <div>
      <h1>Task: Add a button and handle a click event</h1>
      <button onClick={handleClick}>Guess the number between 1 to3 </button>
    </div>
  );
}

export default App;
