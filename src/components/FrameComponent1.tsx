import { FunctionComponent } from "react";
import "./FrameComponent1.css";

export type FrameComponent1Type = {
  className?: string;
};
 
const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section className={`ecosystem-content-wrapper ${className}`}>
      <div className="ecosystem-content">
        <div className="ecosystem-content-child" />
        <div className="ecosystem-title">
          <div className="ecosystem">Ecosystem</div>
        </div>
        <div className="how-to">
          <div className="how-does-a-smart-street-light-parent">
            <h1 className="how-does-a">
              How does a smart street light ecosystem work?
            </h1>
            <div className="diagram">
              <div className="elements-wrapper">
                <div className="elements">
                  <div className="frame-group">
                    <img
                      className="frame-inner"
                      loading="lazy"
                      alt=""
                      src="/frame-427320604.svg"
                    />
                    <img
                      className="frame-inner"
                      loading="lazy"
                      alt=""
                      src="/frame-427320600.svg"
                    />
                  </div>
                  <div className="controller-wrapper">
                    <div className="controller">
                      <div className="street-light-controller-wrapper">
                        <div className="street-light-controller">
                          Street Light Controller
                        </div>
                      </div>
                      <div className="activatesdeactivates-in-respo">
                        Activates/deactivates in response to motion/light
                        sensing and controls the brightness of the street lamp
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-container">
                <div className="frame-div">
                  <div className="line-wrapper">
                    <div className="line-div" />
                  </div>
                  <div className="gateway-content">
                    <div className="frame-parent1">
                      <img
                        className="frame-child1"
                        loading="lazy"
                        alt=""
                        src="/frame-427320601.svg"
                      />
                      <div className="gateway-wrapper">
                        <div className="gateway">Gateway</div>
                      </div>
                    </div>
                    <div className="gateway-content-inner">
                      <div className="line-div" />
                    </div>
                  </div>
                </div>
                <div className="employed">
                  <div className="employed-for-interfacing-betwe-parent">
                    <div className="employed-for-interfacing">
                      Employed for interfacing between a Controller and the
                      Lighting Management Software.
                    </div>
                    <div className="frame-child3" />
                  </div>
                </div>
              </div>
              <div className="cloud-top-parent">
                <img
                  className="cloud-top-icon"
                  loading="lazy"
                  alt=""
                  src="/frame-427320603@2x.png"
                />
                <div className="cloud-bottom">
                  <div className="cloud-content-parent">
                    <div className="cloud-content">
                      <a className="cloud-based-management-system">
                        Cloud-based Management System
                      </a>
                    </div>
                    <div className="collects-information-from">
                      Collects information from multiple gateways.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="how-to-inner">
            <div className="users-content-parent">
              <div className="users-content">
                <img
                  className="users-content-child"
                  alt=""
                  src="/vector-7.svg"
                />
              </div>
              <div className="frame-parent2">
                <div className="users-icon-parent">
                  <img
                    className="users-icon"
                    alt=""
                    src="/frame-427320603-1@2x.png"
                  />
                  <div className="users-parent">
                    <div className="users">Users</div>
                    <div className="data-from-the">
                      Data from the cloud is used to monitor and control street
                      lights by the System Managers.
                    </div>
                  </div>
                </div>
                <div className="evaluation-icon-parent">
                  <img
                    className="users-icon"
                    alt=""
                    src="/frame-427320603-2@2x.png"
                  />
                  <div className="users-parent">
                    <div className="evaluation">Evaluation</div>
                    <div className="gathered-insights-are">
                      Gathered insights are used to evaluate the performance of
                      the lighting systems.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
