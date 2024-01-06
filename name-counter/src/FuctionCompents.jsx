import { useState } from "react";

export default function FuctionCompents() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br /> <button onClick={() => setAge(age + 1)}>+</button>
      {age}
      <button onClick={() => setAge(age - 1)}>-</button>
      <br />
      <br />
      my name is {name} and my age is {age}
    </div>
  );
}
