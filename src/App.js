import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    // console.log("constructor");
  }
  componentDidMount() {
    // console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          }
          // () => {
          // console.log(this.state);
          // }
        )
      );
  }
  searchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };
  render() {
    const { monsters, searchField } = this.state;
    const { searchChange } = this;
    // console.log("render");
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters..."
          onChange={searchChange}
        />
        {/* {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })} */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
