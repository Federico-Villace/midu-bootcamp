import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [value, setValue] = useState("");
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    setPersons(persons.concat({ name: value }));
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input type="text" value={value} onChange={handleChange} />
        </div>
        <div>
          <button type="submit" onClick={handleClick}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((item) => {
        return <p>{item.name}</p>;
      })}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
