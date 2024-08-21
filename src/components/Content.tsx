import { FunctionComponent } from "react";
import "./Content.css";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <div className={`content ${className}`}>
      <div className="frame-parent">
        <div className="title-wrapper">
          <div className="title">
            <div className="smart-lighting-solutions-parent">
              <div className="smart-lighting-solutions">
                smart Lighting solutions
              </div>
              <img
                className="mask-group-icon"
                loading="lazy"
                alt=""
                src="/mask-group@2x.png"
              />
            </div>
            <button className="button-21">
              <div className="setting-and-preferences">
                <div className="login1">Login</div>
              </div>
            </button>
            <div className="title-child" />
          </div>
        </div>
        <div className="planet-earth-from-space-1-parent">
          <img
            className="planet-earth-from-space-1-icon"
            alt=""
            src="/planetearthfromspace-1@2x.png"
          />
          <div className="rectangle-parent">
            <div className="frame-child" />
            <div className="frame-item" />
            <div className="user-interfacenotification" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
