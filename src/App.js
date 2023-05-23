import Nav from "./Nav"
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import About from "./About";
import Testimonials from "./Testimonials";
import MainCards from "./MainCards";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Main />
      <MainCards />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default App;
