import React from "react";
import { Helmet } from "react-helmet";

import BaseLayout from "components/layout/BaseLayout";
import { NavButtonContainer } from "components/nav/NavButtonContainer";
import { NavButton } from "components/nav/NavButton";

import Add from "../assets/svg/icons/add.svg";
import Location from "../assets/svg/icons/current-location.svg";

// tslint:disable no-default-export
export default () => (
  <BaseLayout>
    <Helmet title="Home" />
    <NavButtonContainer>
      <NavButton icon={<Location />} />
      <NavButton icon={<Add />} />
    </NavButtonContainer>
  </BaseLayout>
);
