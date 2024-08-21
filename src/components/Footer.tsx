import { FunctionComponent } from "react";
import "./Footer.css";

export type FooterType = {
  className?: string;
};
 
const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer className={`footer ${className}`}>
      <div className="footer-content">
        <div className="footer-left-parent">
          <div className="footer-left">
            <div className="smart-lights1">smart Lights</div>
          </div>
          <div className="footer-links">
            <div className="product">Product</div>
            <div className="software-services1">Software Services</div>
            <div className="follow-us">Follow Us</div>
          </div>
        </div>
      </div>
      <div className="footer-right">
        <img
          className="planet-earth-from-space-1-icon1"
          loading="lazy"
          alt=""
          src="/planetearthfromspace-1@2x.png"
        />
        <img className="statuspage-icon1" alt="" src="/statuspage-1.svg" />
        <img className="divider-icon" alt="" src="/divider.svg" />
      </div>
      <div className="policies">
        <div className="privacy-policy">Privacy Policy</div>
        <div className="legal">|</div>
        <div className="terms-conditions">{`Terms & Conditions`}</div>
        <div className="legal">|</div>
        <div className="cookie-policy">Cookie Policy</div>
      </div>
    </footer>
  );
};

export default Footer;
