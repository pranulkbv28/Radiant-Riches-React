import "./App.css";
import Footer from "./components/footer/Footer";
import MainContent from "./components/mainContent/MainContent";
import Navbar from "./components/navbar/Navbar";
import PreFooter from "./components/preFooter/PreFooter";
import SignUp from "./components/signUp/SignUp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <PreFooter />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
