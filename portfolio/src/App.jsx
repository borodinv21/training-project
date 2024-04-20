import "./styles/main.css";
import "./styles/reset.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Contacts from "./pages/contacts/Contacts";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Projects />
      {/* <Contacts /> */}
      <Footer />
    </>
  );
}

export default App;
