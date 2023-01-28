import Global from "./styles/Global";
import theme from "./styles/Theme";
import { ThemeProvider } from "styled-components";
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <div>
        <Navbar />
        <Header />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
