// dependencies
import { useState, useEffect, createContext, useContext } from "react";
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

//components and assets
import Home from "./components/Home";
import BrowsePage from "./components/ProductPage";
import AboutUs from "./components/AboutUs";
import NavigationBar from "./components/NavigationBar";
import Cart from "./components/Cart";
import BestSellers from "./components/BestSellers";
import {
  CartContext,
  StoreContext,
  CategoryContext,
  FetchStoresContext,
  FetchProductsContext,
  SelectStoreContext,
} from "./ContextList";
import "./assets/css/style1.css";

function App() {
  // cartContents stores an array of product_ids
  // storeData stores an array of store information
  // [store_id, store_table] -1 for none selected
  const [cartContents, setCartContents] = useState([]);

  // storedata state is an array [selected store ID, store table]
  const [storeData, setStoreData] = useState([-1, [], -1]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [fetchStores, setFetchStores] = useState([]);
  const [fetchProducts, setFetchProducts] = useState([]);
  const [selectStore, setSelectStore] = useState([]);
  const navigate = useNavigate();

  // setCartContents(localStorage.getItem('CartLocalStorage').split(","))
  async function getStores() {
    let res = await fetch(
      `https://7rwcnp46mg.execute-api.us-west-2.amazonaws.com/staging/store/`
    );
    let json = await res.json();
    // console.log(json);

    // console.log(storeData);
    setStoreData([storeData[0], json, storeData[2]]);
    console.log(storeData);
  }

  async function getProducts() {
    let res = await fetch(
      `https://7rwcnp46mg.execute-api.us-west-2.amazonaws.com/staging/product/`
    );
    let json = await res.json();
    console.log(json);
    setFetchProducts(json);
  }

  async function setStore(store_id) {
    let storeIndex;
    if (store_id !== -1) {
      storeData[1].map((store, index) => {
        if (store.store_id === store_id) {
          storeIndex = index;
        }
      });
    } else {
      storeIndex = -1;
    }

    setStoreData([store_id, storeData[1], storeIndex]);
  }

  // <BrowserRouter/> hiding in main.jsx.. encases app.jsx Remember that.
  // <NavigationBar/> has <CartPanel/> in it.
  // Assigning values to Contexts and wrapping everything in them.
  // This means store data and cart contents can be accessed anywhere in the app
  return (
    <CartContext.Provider value={[cartContents, setCartContents]}>
      <StoreContext.Provider value={[storeData, setStoreData]}>
        <CategoryContext.Provider value={[activeCategory, setActiveCategory]}>
          <FetchStoresContext.Provider value={getStores}>
            <FetchProductsContext.Provider value={getProducts}>
              <SelectStoreContext.Provider value={setStore}>
                <header>
                  <NavigationBar />
                </header>
                <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<BrowsePage />} />
                    <Route path="/best-sellers" element={<BestSellers />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/admin" element={null} />
                  </Routes>
                </main>
              </SelectStoreContext.Provider>
            </FetchProductsContext.Provider>
          </FetchStoresContext.Provider>
        </CategoryContext.Provider>
      </StoreContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
