import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Meniu from "./pages/Meniu";
import Contact from "./pages/Contact";
import FAQpage from "./pages/FAQpage";
import { DarkModeProvider } from "./contexts/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/meniu" element={<Meniu />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/faq" element={<FAQpage />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
