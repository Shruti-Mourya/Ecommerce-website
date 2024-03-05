import "./App.css";
import "https://kit.fontawesome.com/0d42d3538d.js";
import "./bootstrap.css";
import Navbar from "./components/Navbar";
import Front from "./components/Front";
import Cards from "./components/Cards";
import Deals from "./components/Deals";
import Brands from "./components/Brands";
import Solds from "./components/Solds";
import Foot from "./components/Foot";



function App() {
  return (
    <>
      <Navbar />
      <Front /*title="sample title"  sample="shruti"*/ />
     <Cards />
     <Deals />
     <Brands />
     <Solds />
      <Foot />
     
       
     
    </>
  );
}

export default App;
