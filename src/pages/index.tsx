import React from "react";
import { Helmet } from "react-helmet";
import Div100vh from "react-div-100vh";

import BaseLayout from "components/layout/BaseLayout";
import { NavButtonContainer } from "components/nav/NavButtonContainer";
import { NavButton } from "components/nav/NavButton";
import DPMCMap from "components/map/DPMCMap";

import Add from "../assets/svg/icons/add.svg";
import Location from "../assets/svg/icons/current-location.svg";

// tslint:disable no-default-export
export default () => (
  <BaseLayout>
    <Helmet title="Home" />
    <Div100vh>
      <DPMCMap />
      <NavButtonContainer>
        <NavButton icon={<Location />} />
        <NavButton primary icon={<Add />} />
      </NavButtonContainer>
    </Div100vh>
  </BaseLayout>
);
