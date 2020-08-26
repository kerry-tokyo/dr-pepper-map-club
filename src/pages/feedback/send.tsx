import React from "react";
import { Helmet } from "react-helmet";

import BaseLayout from "components/layout/BaseLayout";
import { Hero } from "components/hero/Hero";

export default () => {
  return (
    <BaseLayout text>
      <Helmet title="Feedback" />
      <Hero>
        <h1>
          Thanks for contacting us. We'll get back to you as soon as possible.
        </h1>
      </Hero>
    </BaseLayout>
  );
};
