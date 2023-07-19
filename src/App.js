import "./App.css";
import Navbar from "./components/Navigation/Navbar";
import ContactHeader from "./components/contactHeader/ContactHeader";
import Contact_form from "./components/contact_form/Contact_form";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main_container">
        <ContactHeader />
        <Contact_form />
      </main>
    </div>
  );
}

export default App;
