import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Dashboard from './views/Dashboard.js';


function App() {
  return (
    <div className="App">
      <Header/>
      <Dashboard/>
    </div>
  );
}

export default App;
