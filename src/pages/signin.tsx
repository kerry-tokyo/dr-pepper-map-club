import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { auth, firebase } from "../firebase";

import BaseLayout from "components/layout/BaseLayout";
import { Hero } from "components/hero/Hero";
import { CardForm } from "components/form/CardForm";
import { SocialButton } from "components/button/SocialButton";

import Google from "../assets/svg/google.svg";
import GitHub from "../assets/svg/GitHub.svg";

class SignIn extends React.Component {
  //Google
  signInGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const firestore = firebase.firestore();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    firebase
      .auth()
      .signInWithPopup(provider)
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
        location.href = "./index";
      })
      .catch((err) => {
        alert("問題が発生しました。最初からやり直してください。");
        console.log(err);
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
