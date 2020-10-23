import React from 'react';
import SearchMovies from './components/searchmovies';
// import logo from './logo.svg';
// import Header from "./components/Header";

import './App.css';
import Text from './Text';
function App() {
  // const people = ["James", "Lidya"];
  return (
    <div className="App">
    {/* <Text /> */}
    <SearchMovies/>
    {/* {people.map((p,i)=>(
      <Header props={p} key={i}/>
    ))} */}

    </div>
  );
}

export default App;
