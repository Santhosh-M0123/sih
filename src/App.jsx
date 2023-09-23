import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import {Route,Routes} from "react-router-dom";
import Chatbot from "./components/Chat";
// import Api from "./Api";
function App() {
  return (
    <div className="App">
      <header>
        {/* <Api /> */}
        <div className="navbar">
          <Navbar />
        </div>
      </header>
      <section>
        <Routes>
          <Route path="/" element = {<Main />}/>
        </Routes>
      </section>
      <section className="chatbot">
      <Chatbot />
      </section>
    </div>
  );
}

export default App;
