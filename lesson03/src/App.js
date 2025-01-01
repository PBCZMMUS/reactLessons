// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  const nameChange = function () {
    const names = ["Mandalay", "Yangon", "Myanmar"];
    const name = Math.floor(Math.random() * 3);
    return names[name];
  };

  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
