import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import BaseLayout from "components/layout/BaseLayout";
import { Hero } from "components/hero/Hero";

class MyPage extends React.Component {
  render() {
    return (
      <BaseLayout>
        <Helmet title="My Page" />
        <Hero></Hero>
      </BaseLayout>
    );
  }
}

export default MyPage;
