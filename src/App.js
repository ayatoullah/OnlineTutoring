import "./App.css";
import Header from "./components/Header.js";
import Dashboard from "./views/Dashboard.js";
import Chatbot from "./components/Chatbot.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <Dashboard />
      <Chatbot />
    </div>
  );
}

export default App;
