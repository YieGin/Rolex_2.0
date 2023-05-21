import { createContext, useEffect, useState } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import CartPage from "./components/Navbar/cartPage";
import StoreLocator from "./components/Locator/StoreLocator";
import Rolex from "./components/World of Rolex/Rolex";
import Watches from "./components/Watches/Watches";
import View from "./components/View All/View";
import ViewI from "./components/View All/ViewI";
import Loading from "./Loading";
import { Context } from "./components/Context";
export const ThemeContext = createContext(null);
const App = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2350);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <BrowserRouter>
        <Context>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
        </Context>
        <Routes>
          <Route path="/" element={<LandingPage theme={theme} />}></Route>
          <Route path="/cart" element={<CartPage theme={theme} />} />
          <Route path="/Rolex" element={<Rolex theme={theme} />} />
          <Route path="/Watches" element={<Watches theme={theme} />} />
          <Route path="/View" element={<View theme={theme} />} />
          <Route path="/ViewI" element={<ViewI theme={theme} />} />
          <Route
            path="/StoreLocator"
            element={<StoreLocator theme={theme} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;
