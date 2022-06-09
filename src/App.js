import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, SetSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setfilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>setMonsters(users));
  }, []);

  const OnSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    SetSearchField(searchFieldString);
  };

  useEffect(()=>{
    const newfilteredMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setfilteredMonsters(newfilteredMonster);
  },[monsters, searchField])

  return (
    <div className="App">
      <h1 className="app-title">Monsters Roledex</h1>

      <SearchBox
        OnSearchChangeHandler={OnSearchChange}
        className={"monster-search-box"}
        placeholder={"search monsters"}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
