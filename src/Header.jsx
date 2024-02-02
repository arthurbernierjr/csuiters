import NavBar from "./NavBar";
import { useState } from "react";

export default function Header() {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement submission logic here
    console.log(phone); // For demonstration
  };

  return (
    <header className="main-header">
      <NavBar />
      <img
        src="./logocsuiters.png"
        alt="C-Suiters"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <form onSubmit={handleSubmit} className="waiting-list-form">
        <h2>Join the Waiting List</h2>
        <div className="form-control">
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            className="form-input"
          />
        </div>
        <input type="submit" value="Submit" className="form-submit" />
      </form>
    </header>
  );
}
