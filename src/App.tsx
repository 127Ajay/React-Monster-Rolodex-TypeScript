import "./App.css";
import { useState, useEffect, ChangeEvent } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import { getData } from "./utils/data.utils";

export type MonsterType = {
  id: string,
  name: string,
  email: string
}

const App = () => {
  const [searchField, SetSearchField] = useState("");
  const [monsters, setMonsters] = useState<MonsterType[]>([]);
  const [filteredMonsters, setfilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<MonsterType[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    }
    fetchUsers();
  }, []);

  const OnSearchChange = (event: ChangeEvent<HTMLInputElement>):void =>  {
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
