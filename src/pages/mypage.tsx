import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import BaseLayout from "components/layout/BaseLayout";
import { Hero } from "components/hero/Hero";
import { CardForm } from "components/form/CardForm";
import { SocialButton } from "components/button/SocialButton";

class MyPage extends React.Component {
  render() {
    return (
      <BaseLayout>
        <Helmet title="My Page" />
        <Hero>
          <CardForm
            title="Sign In"
            text="Please log in from any service. Please note that Dr Pepper Map Club currently accepts logins only from Google and GitHub accounts."
          ></CardForm>
        </Hero>
      </BaseLayout>
    );
  }
}

export default MyPage;
