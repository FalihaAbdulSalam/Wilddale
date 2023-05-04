// import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-brands-svg-icons";
import Heading from "./components/Heading";
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';



// import WildDaleIcon from './assets/WildDaleIcon.svg';
import { useEffect } from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import  BasicSlider from "./components/BasicSlider";
import DarkVariantExample from "./components/BasicSlider";
import TestimonialSection from "./components/Testimonial";
// import "./autoptimize_ae8e46b110fb0b0282f8bcad5fd836d7.css"

function App() {
  useEffect(() => {
    document.body.classList.add(
      "home",
      "page-template-default",
      "page",
      "page-id-8177",
      "theme-wilddale",
      "woocommerce-no-js",
      "tribe-no-js",
      "tm-pageslider-yes",
      "tm-headerstyle-classic-two",
      "themetechmount-topbar-no",
      "themetechmount-footer-cta-yes",
      "themetechmount-fullwide",
      "themetechmount-page-full-width",
      "tm-empty-sidebar",
      "elementor-default",
      "elementor-kit-6",
      "elementor-page",
      "elementor-page-8177"
    );
  }, []);
  return (
    <div id="tm-home" style={{textDecoration: 'none'}}>
      <div className="main-holder">
        <div id="page" className="hfeed site">
          <Heading />
          <BasicSlider />
          <Body />
          {/* <TestimonialSection /> */}
          <Footer />
          {/* .site-footer */}
          {/* .site-content-wrapper */}
        </div>
        {/* #page .site */}
      </div>
    </div>
  );
}

export default App;
