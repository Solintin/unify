import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Desktop/Header";
import MobileHeader from "./Components/Mobile/Header";
import Index from "./pages/index";
import home from "./pages/home";
import products from "./pages/products";
import faqs from "./pages/faqs";
import features from "./pages/features";
import Footer from "./Components/Footer";
import about from "./pages/about";
import privacy from "./pages/privacy";
import tandc from "./pages/tandc";
import Scrolltotop from "./ScrollToTop";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function reportWindowSize() {
      setWindowWidth(window.innerWidth);
    }
    // Trigger this function on resize
    window.addEventListener("resize", reportWindowSize);
    //  Cleanup for componentWillUnmount
    return () => window.removeEventListener("resize", reportWindowSize);
  }, []);
  return (
    <div className="">
      <Router>
      <Scrolltotop />
      { windowWidth > 760 ? <Header /> : <MobileHeader />    }
        
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/home" component={home} />
          <Route path="/faqs" component={faqs} />
          <Route path="/features" component={features} />
          <Route path="/products" component={products} />
          <Route path="/about" component={about} />
          <Route path="/privacy" component={privacy} />
          <Route path="/tandc" component={tandc} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
