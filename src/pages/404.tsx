import React from "react";
import { Helmet } from "react-helmet";
import BaseLayout from "components/layout/BaseLayout";

import { Hero } from "components/hero/Hero";

// tslint:disable no-default-export
export default () => (
  <BaseLayout>
    <Helmet title="404" />

    <Hero>
      <h1>404</h1>
      <p>Sorry, the page you were looking for doesn't seem to exist anymore.</p>
    </Hero>
  </BaseLayout>
);
