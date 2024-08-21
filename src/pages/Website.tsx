import { FunctionComponent } from "react";
import NavBar from "../components/NavBar";
import Content from "../components/Content";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
import "./Website.css";

const Website: FunctionComponent = () => {
  return (
    <div className="website">
      <section className="hero-section">
        <NavBar />
        <Content />
      </section>
      <FrameComponent1 />
      <section className="image-products">
        <FrameComponent />
        <Benefits />
      </section>
      <Footer />
    </div>
  );
};

export default Website;
