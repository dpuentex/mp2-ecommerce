// dependencies
import { useState, useEffect, createContext, useContext } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

//components and assets
import Home from "./components/Home";
import BrowsePage from "./components/ProductPage";
import AboutUs from "./components/AboutUs";
import NavigationBar from "./components/NavigationBar";
import Cart from "./components/Cart";
import { CartContext, StoreContext, CategoryContext } from "./ContextList";
import "./assets/css/style1.css";

function App() {
  // cartContents stores an array of product_ids
  // storeData stores an array of store information
  // [store_id, store_table] -1 for none selected
  const [cartContents, setCartContents] = useState([]);
  const [storeData, setStoreData] = useState([-1, []]);
  const [activeCategory, setActiveCategory] = useState("All");

  // <BrowserRouter/> hiding in main.jsx.. encases app.jsx Remember that.
  // <NavigationBar/> has <CartPanel/> in it.
  // Assigning values to Contexts and wrapping everything in them.
  // This means store data and cart contents can be accessed anywhere in the app
  return (
    <CartContext.Provider value={[cartContents, setCartContents]}>
      <StoreContext.Provider value={[storeData, setStoreData]}>
        <CategoryContext.Provider value={[activeCategory, setActiveCategory]}>
          <header>
            <NavigationBar />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<BrowsePage />} />
              <Route path="/best-sellers" element={null} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/admin" element={null} />
            </Routes>
          </main>
        </CategoryContext.Provider>
      </StoreContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
