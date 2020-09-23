import React, { ReactNode } from "react";
import Div100vh from "react-div-100vh";

import s from "./Map.scss";

interface MapContainerProps {
  children: ReactNode;
}

const MapContainer = ({ children }: MapContainerProps) => {
  return <Div100vh className={s.map__container}>{children}</Div100vh>;
};

export default MapContainer;
