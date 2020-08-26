import React from "react";
import { Helmet } from "react-helmet";

import BaseLayout from "components/layout/BaseLayout";
import { Hero } from "components/hero/Hero";
import { Block } from "components/block/Block";
import { Link } from "components/link/Link";

export default () => (
  <BaseLayout text>
    <Helmet title="Imprint" />
    <Hero>
      <h1>We Love Dr Pepper.</h1>
      <p>
        Dr Pepper Map Club was created by
        <Link to="https://kerrytokyo.com">&nbsp;Kerry</Link>, a designer living
        in Japan.
        <Link to="https://github.com/kerry-tokyo/dr-pepper-map-club">
          &nbsp;The repository&nbsp;
        </Link>
        is published on GitHub. If you have any questions about bugs or
        features, please contact us from the
        <Link to="/feedback">&nbsp;feedback page</Link>.
      </p>
    </Hero>
    <Block>
      <h6>Social Media</h6>
      <ul>
        <li>
          GitHub:&nbsp;
          <Link to="https://github.com/kerry-tokyo">@kerry-tokyo</Link>
        </li>
        <li>
          Dribbble:&nbsp;
          <Link to="https://dribbble.com/kerry-tokyo">@kerry-tokyo</Link>
        </li>
      </ul>
    </Block>
  </BaseLayout>
);
