// src/App.js
import "./App.css";
import contactData from "./contacts.json";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";

function App() {
  let firstContacts = contactData.slice(0, 20);
  const [contacts, setContacts] = useState(firstContacts);
  // console.log(contacts)

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <Table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img
                  src={contact.pictureUrl}
                  alt="ContactPicture"
                  height="200px"
                  width="150px"
                />
              </td>
              <td>
                <h2>{contact.name}</h2>
              </td>
              <td>
                <p>{contact.popularity}</p>
              </td>
              <td>
              {contact.wonOscar === true ? <span>🏆</span> : <span>{"no content"}</span>}
              </td>
              <td>
              {contact.wonEmmy === true ? <span>🏆</span> : <span>{"no content"}</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default App;
