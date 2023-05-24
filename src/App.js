import Nav from "./Nav"
import Header from "./Header";
import MainCards from "./MainCards";
import Footer from "./Footer";
import About from "./About";
import TestCards from "./TestCards";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {
  return (
    <>
      <Nav />
      <Header />
      <MainCards />
      <TestCards />
      <About />
      <Footer />
    </>
  );
}

export default App;
