import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import BaseLayout from "components/layout/BaseLayout";
import { Hero } from "components/hero/Hero";
import { CardForm } from "components/form/CardForm";
import { SocialButton } from "components/button/SocialButton";

import Google from "../assets/svg/google.svg";
import GitHub from "../assets/svg/GitHub.svg";

class SignIn extends React.Component {
  //Google

  render() {
    return (
      <BaseLayout>
        <Helmet title="Sign In" />
        <Hero>
          <CardForm
            title="Sign In"
            text="Please log in from any service. Please note that Dr Pepper Map Club currently accepts logins only from Google and GitHub accounts."
          >
            <SocialButton icon={<Google />} onClick={this.signInGoogle}>
              Sign in with Google
            </SocialButton>
            <SocialButton icon={<GitHub />}>Sign in with GitHub</SocialButton>
          </CardForm>
        </Hero>
      </BaseLayout>
    );
  }
}

export default SignIn;
