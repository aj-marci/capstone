import Nav from "./Nav"
import Header from "./Header";
import Main from "./Main";
import MainCards from "./MainCards";
import Footer from "./Footer";
import About from "./About";
import Testimonials from "./Testimonials";
import TestCards from "./TestCards";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Main />
      <MainCards />
      <Testimonials />
      <TestCards />
      <About />
      <Footer />
    </>
  );
}

export default App;
