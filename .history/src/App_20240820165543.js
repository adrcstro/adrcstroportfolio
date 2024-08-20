import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Toolsandtechnologies from "./components/Toolsandtechnologies";
import footer from "./components/footer";


function App() {
  return (
    <>
    <Navbar/>
    <Hero />
    <About/>
    <Toolsandtechnologies/>
    <Experience />
<Projects />
<Education />
<footer />
<Contact/>


    </>
  );
}

export default App;
