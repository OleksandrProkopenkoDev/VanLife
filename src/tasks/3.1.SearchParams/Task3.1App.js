import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useSearchParams,
} from "react-router-dom";

const swCharacters = [
  { name: "Luke Skywalker", type: "Jedi" },
  { name: "Darth Vader", type: "Sith" },
  { name: "Emperor Palpatine", type: "Sith" },
  { name: "Yoda", type: "Jedi" },
];

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeParam = searchParams.get("type");

  //filter exercises
  const filteredByType = swCharacters.filter((character) => {
    return character.type === "Sith";
  });
  // console.log(filteredByType);

  // by name length
  const filteredByNameLength = swCharacters.filter(
    (char) => char.name.length < 6
  );
  // console.log(filteredByNameLength);
  // by type to lower case
  const filteredByTypeLowerCase = swCharacters.filter(
    (character) => character.type.toLowerCase() === typeParam
  );
  console.log(typeParam);
  console.log(filteredByTypeLowerCase);
  //-----------------------

  const filteredCharacters =
    filteredByTypeLowerCase.length !== 0
      ? filteredByTypeLowerCase
      : swCharacters;

  const charEls = filteredCharacters.map((char) => (
    <div key={char.name}>
      <h3
        style={{ color: char.type.toLowerCase() === "jedi" ? "blue" : "red" }}
      >
        Name: {char.name}
      </h3>
      <p>Type: {char.type}</p>
      <hr />
    </div>
  ));

  function genNewSearchParamString(key, value) {
    const sp = new URLSearchParams(searchParams);
    if (value === null) {
      sp.delete("type");
    } else {
      sp.set(key, value);
    }
    console.log(sp.toString());
    return `?${sp.toString()}`;
  }

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key); //we can modify prevParams .  (But we cant modify prevState in useState hook)
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <main>
      <h2>Home</h2>
      <div>
        <Link to={genNewSearchParamString("type", "jedi")}>Jedi</Link>
        <Link to={genNewSearchParamString("type", "sith")}>Sith</Link>
        <Link to={genNewSearchParamString("type", null)}>reset</Link>
      </div>
      <div>
        <button onClick={() => handleFilterChange("type", "jedi")}>Jedi</button>
        <button onClick={() => handleFilterChange("type", "sith")}>Sith</button>
        <button onClick={() => handleFilterChange("type", null)}>Clear</button>
      </div>
      {charEls}
    </main>
  );
}

{
}

export default function Task3App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/characters" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
