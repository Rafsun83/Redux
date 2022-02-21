import logo from './logo.svg';
import './App.css';
import Homecontainer from './Containers/Homecontainer';
import Headercontainer from './Containers/Headercontainer';



function App() {
  return (
    <div className="App">
      <Headercontainer></Headercontainer>
      <Homecontainer></Homecontainer>
    </div>
  );
}

export default App;
