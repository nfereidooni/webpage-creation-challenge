import "bootstrap/dist/css/bootstrap.css"
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import useDarkMode from 'use-dark-mode';
import DarkModeToggle from './components/DarkModeToggle'

function App() {
  const darkMode = useDarkMode(false);
  console.log(darkMode)
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <div>
          <Header darkMode={darkMode} />
          <div className="navbar">
            <DarkModeToggle darkMode={darkMode} />
          </div>
          <Routes>
            <Route exact path="/" element={<Home
                    // isDark={true}
                    // isDark={darkMode.value}
                    darkMode={darkMode}
                    />}/>
          </Routes>
          
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;