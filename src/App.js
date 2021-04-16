import logo from './logo.svg';
import './App.css';
import './index.css';
import SongsList from "./components/SongsList"; 
import SelectedSong from "./components/SelectedSong";
 
// import {selectSong, addSong} from "./actions/selectSong"; //если ипортируем не за дефолтом, то фигурные скобки нужны

function App() {
  return (
    <div className="container">
      <h1>REACT-REDUX INTERFACE</h1>
      <div>
        <div>
          <SongsList />
        </div>
        <div>
          <SelectedSong />
        </div>
      </div>
    </div>
  );
}

export default App;
