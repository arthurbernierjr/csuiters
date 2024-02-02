import { useState } from "react";

export default function Footer() {
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/leads/addLead', {
        method: 'POST',
        body: JSON.stringify({phone})
      })
      if(response.ok){
        setPhone('')
      } else {
        throw new Error('unable to add lead')
      }
    } catch (error) {
      console.error(error)
    }
  };
  return (
    <>
      <footer>
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
        <h1>
          Made with <i className="material-icons">favorite</i> by{" "}
          <a href="https://bigpoppacode.io">BigPoppaCode</a> &copy;
          {new Date().getFullYear()}
        </h1>
      </footer>
    </>
  );
}
