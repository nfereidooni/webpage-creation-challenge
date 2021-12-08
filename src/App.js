import "bootstrap/dist/css/bootstrap.css"
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <div>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home/>}/>
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;