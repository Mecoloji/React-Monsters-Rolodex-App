// import { Component } from "react";
import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  // console.log("render");
  const [searchField, setSearchField] = useState("");
  const [title, setTitle] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  // console.log("işlendi");

  useEffect(() => {
    // console.log("effect ateşlendi");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    // console.log("Effect2 ateşlendi");
    setFilteredMonsters(newFilteredMonsters);
    // console.log("Effect Ateşlendi");
  }, [monsters, searchField]);

  // console.log(searchField);
  const searchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const başlıkDeğişikliği = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setTitle(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        onChangeHandler={searchChange}
        placeholder="search monsters..."
        className="monsters-search-box"
      />
      <br />
      <SearchBox
        onChangeHandler={başlıkDeğişikliği}
        placeholder="başlıkları ara..."
        className="title-search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//     // console.log("constructor");
//   }
//   componentDidMount() {
//     // console.log("componentDidMount");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           }
//           // () => {
//           // console.log(this.state);
//           // }
//         )
//       );
//   }
//   searchChange = (e) => {
//     const searchField = e.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   };
//   render() {
//     // console.log("app js'den render edildi");
//     const { monsters, searchField } = this.state;
//     const { searchChange } = this;
//     // console.log("render");
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           onChangeHandler={searchChange}
//           placeholder="search monsters..."
//           className="monsters-search-box"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
