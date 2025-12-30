import { useState } from "react";
import "./App.css";

function App() {
  // 1. CREATE STATE: We need state for number, expiry, and cvv
  // const [cardNumber, setCardNumber] = ...

  // 2. HANDLE CHANGE: Update state when user types
  // You can use separate functions or one shared function

  // 3. CARD TYPE LOGIC:
  // Check the first digit of cardNumber.
  // Returns "Visa", "Mastercard", or ""
  const getCardType = () => {
    // Write logic here...
  };

  return (
    <div
      style={{ padding: "40px", textAlign: "center", fontFamily: "sans-serif" }}
    >
      <h1>Checkout 💳</h1>

      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "10px",
          width: "300px",
          margin: "0 auto",
        }}
      >
        {/* CARD NUMBER INPUT */}
        <div style={{ marginBottom: "15px", textAlign: "left" }}>
          <label>Card Number</label>
          <input
            type="text"
            placeholder="1234 5678 9101 1121"
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            // Add value and onChange here
          />
          {/* LOGIC: Show Card Type Here (e.g. "Unknown", "Visa", "MasterCard") */}
          <small style={{ color: "blue", fontWeight: "bold" }}>
            Card Type: {/* Call your function or variable here */}
          </small>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          {/* EXPIRY INPUT */}
          <div style={{ textAlign: "left" }}>
            <label>Expiry</label>
            <input
              type="text"
              placeholder="MM/YY"
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              // Add value and onChange here
            />
          </div>

          {/* CVV INPUT */}
          <div style={{ textAlign: "left" }}>
            <label>CVV</label>
            <input
              type="text"
              placeholder="123"
              maxLength={3}
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              // Add value and onChange here
            />
          </div>
        </div>

        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            background: "black",
            color: "white",
            cursor: "pointer",
          }}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default App;
