
import './App.css';
import CharacterList from './components/CharacterList';
import NavBar from './components/NavBar';

const App=()=> {
  return (
    <div id="app">
      <div id ="menu">
        <NavBar/>
      </div>
      <div id="body">
        <CharacterList/>
      </div>
    </div>
    
  )
}

export default App;
