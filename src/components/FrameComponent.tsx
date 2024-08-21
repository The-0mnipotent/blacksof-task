 import { FunctionComponent } from "react";
import Component from "./Component";
import "./FrameComponent.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={`unsplash-fqsuf-0chk-parent ${className}`}>
      <img
        className="unsplash-fqsuf-0chk-icon"
        alt=""
        src="/unsplash-fqsuf0chk@2x.png"
      />
      <div className="rectangle-div" />
      <div className="frame-wrapper">
        <div className="products-content-parent">
          <div className="products-content">
            <div className="products-title">
              <div className="products-heading">
                <div className="products1">Products</div>
              </div>
              <h1 className="cutting-edge-hardware-offerin-container">
                <span>Cutting-edge hardware</span>
                <span>{`, `}</span>
                <span>
                  offerings helping cities optimize resources and achieve smart
                  development goals
                </span>
              </h1>
            </div>
          </div>
          <div className="centralized">
            <div className="frame-parent3">
              <div className="component-1-parent">
                <Component
                  propBorder="1.5px solid #869ffb"
                  propFlex="1"
                  propBackground="linear-gradient(-90deg, rgba(203, 227, 255, 0.06), rgba(110, 178, 255, 0.4), rgba(203, 227, 255, 0.06) 49.87%, rgba(174, 210, 251, 0.4))"
                  propMinWidth="200px"
                  centralizedControlMonitoring={`Centralized Control & Monitoring System`}
                  propColor="#00386b"
                />
                <Component
                  propBorder="1.5px solid #797979"
                  propFlex="unset"
                  propBackground="unset"
                  propMinWidth="unset"
                  centralizedControlMonitoring="NEMA-Mounted VOLC 1160"
                  propColor="#505050"
                />
                <Component
                  propBorder="1.5px solid #797979"
                  propFlex="1"
                  propBackground="unset"
                  propMinWidth="200px"
                  centralizedControlMonitoring="Retrofit Street Light Controller VOLC 2160"
                  propColor="#505050"
                />
                <Component
                  propBorder="1.5px solid #797979"
                  propFlex="1"
                  propBackground="unset"
                  propMinWidth="200px"
                  centralizedControlMonitoring="Retrofit Street Light Controller VOLC 2180"
                  propColor="#505050"
                />
              </div>
              <Component centralizedControlMonitoring="Retrofit Street Light Controller VOLC 4180" />
            </div>
            <div className="image-placeholder">
              <div className="container">
                <img
                  className="image-placeholder-icon"
                  alt=""
                  src="/image-placeholder@2x.png"
                />
                <img
                  className="empty-icon"
                  loading="lazy"
                  alt=""
                  src="/frame-2332@2x.png"
                />
              </div>
              <div className="product-container-parent">
                <div className="product-container">
                  <div className="product-details">
                    <div className="product-title">
                      <div className="products2">Products</div>
                      <div className="product-name">1/5</div>
                    </div>
                    <div className="product-description">
                      <div className="description-content">
                        <h2 className="centralized-control1">{`Centralized Control & Monitoring System`}</h2>
                        <div className="designed-indigenously-for">
                          Designed indigenously for street lighting projects,
                          the CCMS offers a complete feeder panel for a group of
                          30-50 street lights.
                        </div>
                      </div>
                      <div className="button-container">
                        <div className="know-more">Know More</div>
                        <img
                          className="empty-button-icon"
                          loading="lazy"
                          alt=""
                          src="/frame-2327.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="frame-child4"
                  loading="lazy"
                  alt=""
                  src="/frame-2333@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle-div" />
    </div>
  );
};

export default FrameComponent;
