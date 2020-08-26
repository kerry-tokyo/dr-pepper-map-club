import React from "react";
import { Helmet } from "react-helmet";

import BaseLayout from "components/layout/BaseLayout";
import { Hero } from "components/hero/Hero";
import { CardForm } from "components/form/CardForm";
import { SocialButton } from "components/button/SocialButton";

import { auth, firebase } from "../firebase";

import Google from "../assets/svg/google.svg";
import GitHub from "../assets/svg/github.svg";

class SignIn extends React.Component {
  //Google
  signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithRedirect(provider)

      .then((res) => {
        return firestore.collection("users").doc(res.user.uid).set({
          created_at: firebase.firestore.FieldValue.serverTimestamp(),
          name: res.user.displayName,
          thumgnailMediumImageUrl: res.user.photoURL,
          originalImageUrl: res.user.photoURL,
          update_at: firebase.firestore.FieldValue.serverTimestamp(),
        });
      })
      .then(() => {
        location.href = "/index";
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  //GitHub
  signInWithGithub = () => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase
      .auth()
      .signInWithRedirect(provider)

      .then((res) => {
        return firestore.collection("users").doc(res.user.uid).set({
          created_at: firebase.firestore.FieldValue.serverTimestamp(),
          name: res.user.displayName,
          thumgnailMediumImageUrl: res.user.photoURL,
          originalImageUrl: res.user.photoURL,
          update_at: firebase.firestore.FieldValue.serverTimestamp(),
        });
      })
      .then(() => {
        location.href = "/";
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  render() {
    return (
      <BaseLayout>
        <Helmet title="Sign In" />
        <Hero>
          <CardForm
            title="Sign In"
            text="Please log in from any service. Please note that Dr Pepper Map Club currently accepts logins only from Google and GitHub accounts."
          >
            <SocialButton icon={<Google />} onClick={this.signInWithGoogle}>
              Sign in with Google
            </SocialButton>
            <SocialButton icon={<GitHub />} onClick={this.signInWithGithub}>
              Sign in with GitHub
            </SocialButton>
          </CardForm>
        </Hero>
      </BaseLayout>
    );
  }
}

export default SignIn;
