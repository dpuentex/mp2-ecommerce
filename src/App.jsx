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
import Admin from "./components/Admin";
import {
  CartItemDataContext,
  StoreContext,
  DetectedCategoriesContext,
  FetchStoresContext,
  FetchProductsContext,
  SelectStoreContext,
  ProductContext,
  RetrieveCartItemData,
  SearchContext,
} from "./ContextList";
import "./assets/css/style1.css";

function App() {
  // search section
  //category: activeCategory, searchTerm: "", minPrice: 0, maxPrice: 0, detailFilters: {}}
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [detailFilters, setDetailFilters] = useState({});

  // storeData stores an array of store information
  // [store_id, store_table] -1 for none selected
  const [cartItemData, setCartItemData] = useState([]);
  const [storeData, setStoreData] = useState([-1, [], -1]);
  const [detectedCategories, setDetectedCategories] = useState("All");

  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // if store selected in storeData[0] then fetch that store
    console.log("home.jsx");
    getStores();
    getProducts();
  }, []);
  
  // this is called a dependecy array. Anything changing in this array will cause the effect to run again.
  //unless it's blank in which case it will only run once on render

  // once productData loads, calculate and set detectedCategories
  useEffect(() => {
    if(productData.length > 0) {setDetectedCategories(calculateCategories(productData))}
  }, [productData]);

  useEffect(() => {
    console.log(detectedCategories)
  }, [detectedCategories]); // when the value of detectedCategories changes, run this function

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
    console.log("Fetched stores in app.jsx");
  }

  async function getProducts() {
    let res = await fetch(
      `https://7rwcnp46mg.execute-api.us-west-2.amazonaws.com/staging/products/all`
    );
    let json = await res.json();
    console.log(json);
    console.log("Fetched products in app.jsx");
    setProductData(json);
    return json;
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
    console.log(productData)
    console.log(cartItemData)
    if (productData.length > 0 && localStorage.getItem("CartLocalStorage")) {
      let detailedData = [];
      let productInCartIdArray = [];
      console.log(localStorage.getItem("CartLocalStorage").split(","))
      localStorage
        .getItem("CartLocalStorage")
        .split(",")
        .forEach((localStorageID) => {
          console.log(Object.keys(localStorageID))
          productData.forEach((product, index) => {
            if (product.product_id == localStorageID) {
              detailedData.push(product);
              productInCartIdArray.push(Number(product.product_id));
          }
          // if(productData.includes(productData[product_id])){detailedData.push(
          //   productData.filter((product) => product.product_id == product_id)[0]
          // );}
        })})
      localStorage.setItem("CartLocalStorage", productInCartIdArray);
      let arrayWithNoRepeats = [];
      for (let i = 0; i < detailedData.length; i++) {
        if (!arrayWithNoRepeats.includes(detailedData[i])) {
          arrayWithNoRepeats.push(detailedData[i]);
        }
      }
      setCartItemData([detailedData, arrayWithNoRepeats]);

      console.log(cartItemData);
      console.log(
        "calculated cart data [with repeats, without repeats] in app.jsx"
      );
    } else {
      setCartItemData([[], []]);}
  }

  function calculateCategories(productDataParam) {
    console.log(productDataParam)
    let categories = {};
    //for each product in the array
    productDataParam.forEach((product) => {
      // if {categories: storeid} doesnt include the category in the given object  categories[storeid].category = null
      if (!categories[product.store_id]?.includes(product.details_object.category)) {
        // and if the storeid doesnt exist in the category already then create an empty array for that store using the storeid
        if(!categories[product.store_id]) {categories[product.store_id] = []}
        // then push the detected category to the array
        categories[product.store_id]?.push(product.details_object.category)
      }
    });
    return categories;
  }

  // <BrowserRouter/> hiding in main.jsx.. encases app.jsx Remember that.
  // <NavigationBar/> has <CartPanel/> in it.
  // Assigning values to Contexts and wrapping everything in them.
  // This means store data and cart contents can be accessed anywhere in the app
  return (
    <CartItemDataContext.Provider value={[cartItemData, setCartItemData]}>
      <StoreContext.Provider value={[storeData, setStoreData]}>
        <DetectedCategoriesContext.Provider value={[detectedCategories, setDetectedCategories]}>
          <FetchStoresContext.Provider value={getStores}>
            <FetchProductsContext.Provider value={getProducts}>
              <SelectStoreContext.Provider value={setStore}>
                <ProductContext.Provider value={[productData, setProductData]}>
                  <RetrieveCartItemData.Provider value={retrieveCartItemData}>
                    <SearchContext.Provider
                      value={{
                        accessSearch: {
                          category: category,
                          searchTerm: searchTerm,
                          minPrice: minPrice,
                          maxPrice: maxPrice,
                          detailFilters: detailFilters,
                        },
                        setSearch: {
                          setCategory: setCategory,
                          setSearchTerm: setSearchTerm,
                          setMinPrice: setMinPrice,
                          setMaxPrice: setMaxPrice,
                          setDetailFilters: setDetailFilters,
                        },
                      }}
                    >
                      <header>
                        <NavigationBar />
                      </header>
                      <main>
                        <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/products" element={<BrowsePage />} />
                          <Route
                            path="/best-sellers"
                            element={<BestSellers />}
                          />
                          <Route path="/about-us" element={<AboutUs />} />
                          <Route path="/cart" element={<Cart />} />
                          <Route path="/admin" element={<Admin />} />
                        </Routes>
                      </main>
                    </SearchContext.Provider>
                  </RetrieveCartItemData.Provider>
                </ProductContext.Provider>
              </SelectStoreContext.Provider>
            </FetchProductsContext.Provider>
          </FetchStoresContext.Provider>
        </DetectedCategoriesContext.Provider>
      </StoreContext.Provider>
    </CartItemDataContext.Provider>
  );
}

export default App;
