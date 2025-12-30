import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <TipCalculatar />
    </div>
  );
}
function TipCalculatar() {
  const [bill, SetBill] = useState("");
  const [percentange1, setPercentage1] = useState("");
  const [percentange2, setPercentage2] = useState("");
  const tip = (bill * ((percentange1 + percentange2) / 2)) / 100;
  function handlerest() {
    SetBill("");
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <div>
      <Billinput bill={bill} onSetBill={SetBill} />
      <Selectpercentage percentange={percentange1} onSelect={setPercentage1}>
        how you like our services
      </Selectpercentage>
      <Selectpercentage percentange={percentange2} onSelect={setPercentage2}>
        how your friend like oue service
      </Selectpercentage>
      {bill > 0 && (
        <>
          {" "}
          <Output bill={bill} tip={tip} />
          <Rest onRest={handlerest} />
        </>
      )}
    </div>
  );
}
function Billinput({ bill, onSetBill }) {
  return (
    <div>
      <label htmlFor="how much is bill?">How much your bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
function Selectpercentage({ children, percentange, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentange}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">Its was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">It was Amazing (20%)</option>
      </select>
    </div>
  );
}
function Output({ bill, SetBill, tip }) {
  return (
    <h2>
      You pay ${bill + tip} (${bill}$ + ${tip} tip)
    </h2>
  );
}
function Rest({ onRest }) {
  return (
    <div>
      <button onClick={onRest}>Rest</button>
    </div>
  );
}
