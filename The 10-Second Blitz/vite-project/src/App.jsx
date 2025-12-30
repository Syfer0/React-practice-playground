import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  // 1. DEFINE YOUR STATE & REFS HERE
  const [text, settext] = useState("");
  const [isgameisStart, setIsgameisStart] = useState(false);
  const [timer, settimer] = useState("10");
  const inputRef = useRef(null);
  // 2. IMPLEMENT HANDLER FUNCTIONS
  function handleChange(e) {
    const value = e.target.value;
    settext(value);
  }
  function startGame() {
    setIsgameisStart(true);
    settext("");
    settimer(10);
    inputRef.current.focus();
  }
  const wordCount = text
    .trim()
    .split(" ")
    .filter((w) => w !== "").length;
  // 3. IMPLEMENT THE TIMER (useEffect)
  useEffect(() => {
    let timerid;
    if (isgameisStart && timer > 0) {
      timerid = setInterval(() => {
        settimer((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timerid);
            setIsgameisStart(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
      return () => clearInterval(timerid);
    }
  }, [isgameisStart, timer]);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Speed Typer ⚡</h1>

      {/* Fix the variable below */}
      <h3>Time Remaining: {timer}</h3>

      <textarea
        // Attach Ref
        ref={inputRef}
        // Attach onChange here

        onChange={handleChange}
        // Bind value here
        value={text}
        disabled={!isgameisStart}
        // disabled={false /* Fix this logic */}
        style={{ width: "300px", height: "150px", margin: "10px" }}
      />

      <br />

      <button onClick={startGame} disabled={false /* Fix this logic */}>
        Start Game
      </button>

      {/* Render the calculated word count below */}
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
