// import "./App.css";
import Navbar from "./components/navbar";
import Cards from "./components/Cards";


function App() {
  return (
    <>
     <Navbar />
    <div className="d-flex gap-10 justify-content-center pt-5">
      <Cards
        tittle="Javascript"
        src="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=600"
        prag=" Some quick example text to build on the card title and make up the
      bulk of the card's content."
        btn="Click here"
      />
      <Cards
        tittle="React JS"
        src="https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=600"
        prag="Some quick example text to build on the card title and make up the
      bulk of the card's content."
        btn="Click here"
      />
      <Cards
        tittle="HTML"
        src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600"
        prag="Some quick example text to build on the card title and make up the
      bulk of the card's content."
        btn="click here"
      />
    </div>
    </>
  );
}

export default App;
