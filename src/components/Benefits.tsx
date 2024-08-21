import { FunctionComponent } from "react";
import "./Benefits.css";

export type BenefitsType = {
  className?: string;
};
 
const Benefits: FunctionComponent<BenefitsType> = ({ className = "" }) => {
  return (
    <div className={`benefits ${className}`}>
      <div className="benefits-description">
        <img className="image-34-icon" alt="" src="/image-34@2x.png" />
        <div className="the-platform-assists-city-mana-parent">
          <h1 className="the-platform-assists">
            The platform assists city managers on multiple fronts
          </h1>
          <img
            className="group-icon"
            loading="lazy"
            alt=""
            src="/group-4.svg"
          />
        </div>
        <div className="benefits-list">
          <div className="benefits-container">
            <div className="benefit">
              <div className="separator" />
              <div className="benefit-content">
                <div className="benefit-item">
                  <div className="benefit-detail">
                    <div className="rectangle-group">
                      <div className="frame-child6" />
                      <img
                        className="image-41-icon"
                        loading="lazy"
                        alt=""
                        src="/image-41@2x.png"
                      />
                    </div>
                    <h2 className="saves-on-power">{`Saves on power consumption & related costs`}</h2>
                  </div>
                </div>
                <div className="downtime">
                  <div className="rectangle-group">
                    <div className="frame-child6" />
                    <img
                      className="image-41-icon"
                      alt=""
                      src="/image-41@2x.png"
                    />
                  </div>
                  <h2 className="lowers-downtimes">Lowers downtimes</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="benefits-separator">
            <div className="benefits-separator-child" />
            <div className="theft-parent">
              <div className="theft">
                <div className="theft-separator" />
                <div className="theft-content">
                  <div className="rectangle-group">
                    <div className="frame-child6" />
                    <img
                      className="image-41-icon"
                      alt=""
                      src="/image-41@2x.png"
                    />
                  </div>
                  <h2 className="detects-power-thefts">
                    Detects power thefts.
                  </h2>
                </div>
              </div>
              <div className="monitoring">
                <div className="benefit-detail">
                  <div className="rectangle-group">
                    <div className="frame-child6" />
                    <img
                      className="image-41-icon"
                      alt=""
                      src="/image-41@2x.png"
                    />
                  </div>
                  <h2 className="ensures-smart-monitoring">
                    Ensures smart monitoring and control of the street light
                    infrastructure.
                  </h2>
                </div>
              </div>
            </div>
            <div className="benefits-separator-item" />
            <div className="security">
              <div className="security-separator" />
              <div className="security-content">
                <div className="security-item">
                  <div className="rectangle-group">
                    <div className="frame-child6" />
                    <img
                      className="image-41-icon"
                      alt=""
                      src="/image-41@2x.png"
                    />
                  </div>
                  <h2 className="lowers-downtimes">
                    Ensures security in the neighborhood
                  </h2>
                </div>
                <div className="analytics">
                  <div className="analytics-separator" />
                </div>
              </div>
              <div className="analytics-content">
                <div className="rectangle-group">
                  <div className="frame-child6" />
                  <img
                    className="image-41-icon"
                    alt=""
                    src="/image-41@2x.png"
                  />
                </div>
                <div className="analytics-details">
                  <h2 className="ensures-real-time-actionable">
                    Ensures real-time actionable analytics on power failures,
                    lamp malfunctions, voltage failures, etc.
                  </h2>
                  <div className="actionable">
                    <div className="analytics-separator" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
