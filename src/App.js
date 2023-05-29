import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Header from "./components/header";
import Footer from "./components/footer";
import Login from "./components/login";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />;
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
