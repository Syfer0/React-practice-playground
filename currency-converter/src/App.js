// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState("1");
  const [currlog, setCurrlog] = useState("USD");
  const [tocurr, setTocurr] = useState("EUR");
  const [output, setOutput] = useState("");
  const [convert, setConvert] = useState("");
  const [isloading, setIsloading] = useState("false");
  useEffect(
    function () {
      async function feathData() {
        setIsloading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${currlog}&to=${tocurr}`
        );
        const data = await res.json();
        setConvert(data.rates[tocurr]);
        console.log("setConverted");
        setIsloading(false);
      }
      if (currlog === tocurr) return setConvert(amount);
      feathData();
    },
    [amount, currlog, tocurr]
  );
  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        disabled={isloading}
      />
      <select
        value={currlog}
        onChange={(e) => setCurrlog(e.target.value)}
        disabled={isloading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={tocurr}
        onChange={(e) => setTocurr(e.target.value)}
        disabled={isloading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {convert}
        {tocurr}
      </p>
    </div>
  );
}
