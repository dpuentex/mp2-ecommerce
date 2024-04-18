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
  CartItemDataContext,
  StoreContext,
  CategoryContext,
  FetchStoresContext,
  FetchProductsContext,
  SelectStoreContext,
  ProductContext,
  RetrieveCartItemData,
} from "./ContextList";
import "./assets/css/style1.css";

function App() {
  // storeData stores an array of store information
  // [store_id, store_table] -1 for none selected
  const [cartItemData, setCartItemData] = useState([]);
  const [storeData, setStoreData] = useState([-1, [], -1]);
  const [activeCategory, setActiveCategory] = useState("All");

  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // if store selected in storeData[0] then fetch that store
    console.log("home.jsx");
    getStores();
    getProducts();
  }, []);

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
      `https://7rwcnp46mg.execute-api.us-west-2.amazonaws.com/staging/products/all`
    );
    let json = await res.json();
    console.log(json);
    setProductData(json);
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

  function retrieveCartItemData() {
    console.log(productData);
    if (productData.length > 0) {
      let detailedData = [];
      localStorage
        .getItem("CartLocalStorage")
        .split(",")
        .forEach((product_id) => {
          detailedData.push(
            productData.filter((product) => product.product_id == product_id)[0]
          );
        });

      console.log(detailedData);
      // cartdatatemp = detailedData

      let arrayWithNoRepeats = [];
      for (let i = 0; i < detailedData.length; i++) {
        if (!arrayWithNoRepeats.includes(detailedData[i])) {
          arrayWithNoRepeats.push(detailedData[i]);
        }
      }
      setCartItemData([detailedData, arrayWithNoRepeats]);
    }
  }

  // <BrowserRouter/> hiding in main.jsx.. encases app.jsx Remember that.
  // <NavigationBar/> has <CartPanel/> in it.
  // Assigning values to Contexts and wrapping everything in them.
  // This means store data and cart contents can be accessed anywhere in the app
  return (
    <CartItemDataContext.Provider value={[cartItemData, setCartItemData]}>
      <StoreContext.Provider value={[storeData, setStoreData]}>
        <CategoryContext.Provider value={[activeCategory, setActiveCategory]}>
          <FetchStoresContext.Provider value={getStores}>
            <FetchProductsContext.Provider value={getProducts}>
              <SelectStoreContext.Provider value={setStore}>
                <ProductContext.Provider value={[productData, setProductData]}>
                  <RetrieveCartItemData.Provider value={retrieveCartItemData}>
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
                  </RetrieveCartItemData.Provider>
                </ProductContext.Provider>
              </SelectStoreContext.Provider>
            </FetchProductsContext.Provider>
          </FetchStoresContext.Provider>
        </CategoryContext.Provider>
      </StoreContext.Provider>
    </CartItemDataContext.Provider>
  );
}

export default App;
