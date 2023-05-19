import Nav from "./Nav"
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import About from "./About";
import Testimonials from "./Testimonials";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Main />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default App;
