import React from "react";
import { Helmet } from "react-helmet";

import BaseLayout from "components/layout/BaseLayout";
import { Hero } from "components/hero/Hero";
import { Block } from "components/block/Block";
import { Button } from "components/button/Button";
import { Breadcrumb } from "components/breadcrumb/Breadcrumb";
import { LinkItem } from "components/breadcrumb/LinkItem";
import { CurrentItem } from "components/breadcrumb/CurrentItem";

export default () => {
  return (
    <BaseLayout>
      <Helmet title="Delete Account" />
      <Hero>
        <Breadcrumb>
          <LinkItem href="/mypage">Profile</LinkItem>
          <LinkItem href="/settings">Settings</LinkItem>
          <CurrentItem>Delete Account</CurrentItem>
        </Breadcrumb>
        <h1>Delete Account</h1>
        <p>
          When you delete your account, all your existing data will be deleted.
        </p>
      </Hero>
      <Block>
        <Button>Delete</Button>
      </Block>
    </BaseLayout>
  );
};
