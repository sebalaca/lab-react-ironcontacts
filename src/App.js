// src/App.js
import "./App.css";
import contactData from "./contacts.json";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";

let firstContacts = contactData.slice(0, 5);

function App() {
  const [contacts, setContacts] = useState(firstContacts);
  // console.log(contacts)

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <Table>
        <thead>
          <tr style={{ display: "flex", justifyContent: "space-between" }}>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            {contacts.map((contact) => (
              <td
                key={contact.id}
                style={{ display: "flex", justifyContent: "space-between"}}
              >
                <img
                  src={contact.pictureUrl}
                  alt="ContactPicture"
                  height="200px"
                  width="150px"
                />
                <h2>{contact.name}</h2>
                <p>{contact.popularity}</p>
              </td>
            ))}
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
export default App;
