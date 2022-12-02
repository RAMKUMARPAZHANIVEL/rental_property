import NavBar from "./components/navBar";
import { useState, useEffect } from "react";
import RentalProperty from "./rental_property";
import Footer from "./components/footer";
import Main from "./components/main";
function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([RentalProperty]);
  const searchResult = (keyword) => {
    setInput(keyword);
  };
  useEffect(() => {
    const propertyList = RentalProperty.filter((singleprop) => {
      if (singleprop.property_type.startsWith(input)) return true;
      if (singleprop.place_name.startsWith(input)) return true;
      return false;
    });
    setList(propertyList);
    console.log(list);
  }, [input,list]);

  return (
    <main>
      <NavBar searchResult={searchResult} />
        <Main list={list} />
      <Footer />
    </main>
  );
}

export default App;
