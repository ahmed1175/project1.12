import "./App.css";
import Header from "./component/Header/header";
import Footer from "./component/footer/footer";
import Hero from "./component/hero/hero";
import Main from "./component/main/main";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
