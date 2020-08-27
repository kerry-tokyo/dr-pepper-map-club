import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { firebase } from "../../firebase";

import BaseLayout from "components/layout/BaseLayout";
import { Hero } from "components/hero/Hero";
import { Block } from "components/block/Block";
import { Button } from "components/button/Button";
import { Form } from "components/form/Form";
import { Input } from "components/form/Input";
import { FormItem } from "components/form/FormItem";
import { Label } from "components/form/Label";
import { Breadcrumb } from "components/breadcrumb/Breadcrumb";
import { LinkItem } from "components/breadcrumb/LinkItem";
import { CurrentItem } from "components/breadcrumb/CurrentItem";

export default () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  const update = (name: string) => {
    const currentUser = firebase.auth().currentUser;
    currentUser
      ?.updateProfile({
        displayName: name,
      })
      .then(() => {
        setUser(null);
        setUser(firebase.auth().currentUser);
      })
      .catch((error) => {
        console.log(`updateProfile() error : ${error.code}, ${error.message}`);
      });
  };

  return (
    <BaseLayout>
      <Helmet title="Edit Profile" />
      <Hero>
        <Breadcrumb>
          <LinkItem href="/mypage">Profile</LinkItem>
          <LinkItem href="/settings">Settings</LinkItem>
          <CurrentItem>Edit Profile</CurrentItem>
        </Breadcrumb>
        <h1>Edit Profile</h1>
        <p>You can change the user name and icon.</p>
      </Hero>
      <Block>
        <Form>
          <FormItem>
            <Label>Your Name</Label>
            <Input placeholder={user && user.displayName} />
          </FormItem>
          <FormItem>
            <Label>Your Icon</Label>
            <Input src={user && user.photoURL} />
          </FormItem>
          <FormItem>
            <Button>Save</Button>
          </FormItem>
        </Form>
      </Block>
    </BaseLayout>
  );
};
