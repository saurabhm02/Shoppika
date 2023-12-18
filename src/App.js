import Body from "./components/Pages/Body";
import Header from "./components/Pages/Header";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App ">
      <div className="sticky top-0">
        <Header/>
      </div>
      <Routes>
        <Route path="/" element={<Body/>}/>
        <Route path="/products" element={<Products/>}/>
      </Routes>
    </div>
  );
}

export default App;
