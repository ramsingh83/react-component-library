import React from "react";
import { ContactDetails } from "../lib";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Component Library</h1>
    <h2>Contact Details</h2>
    <ContactDetails label="Email Address" placeholder="ram.singh@example.com" />
    <h2>Postcode Finder</h2>
    
  </div>
);

export default App;
