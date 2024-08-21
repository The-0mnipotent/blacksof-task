import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Component.css";

export type ComponentType = {
  className?: string;
  centralizedControlMonitoring?: string;

  /** Style props */
  propBorder?: CSSProperties["border"];
  propFlex?: CSSProperties["flex"];
  propBackground?: CSSProperties["background"];
  propMinWidth?: CSSProperties["minWidth"];
  propColor?: CSSProperties["color"];
};

const Component: FunctionComponent<ComponentType> = ({
  className = "",
  propBorder,
  propFlex,
  propBackground,
  propMinWidth,
  centralizedControlMonitoring,
  propColor,
}) => {
  const component2Style: CSSProperties = useMemo(() => {
    return {
      border: propBorder,
      flex: propFlex,
      background: propBackground,
      minWidth: propMinWidth,
    };
  }, [propBorder, propFlex, propBackground, propMinWidth]);

  const centralizedControlStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={`component-2 ${className}`} style={component2Style}>
      <div className="centralized-control" style={centralizedControlStyle}>
        {centralizedControlMonitoring}
      </div>
    </div>
  );
};

export default Component;
