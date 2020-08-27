import React from "react";
import { Helmet } from "react-helmet";

import BaseLayout from "components/layout/BaseLayout";
import { Hero } from "components/hero/Hero";
import { Block } from "components/block/Block";
import { Column } from "components/column/Column";
import { Card } from "components/card/Card";
import Delete from "../../assets/svg/icons/user-delete.svg";
import Pen from "../../assets/svg/icons/pen.svg";
import { Breadcrumb } from "components/breadcrumb/Breadcrumb";
import { LinkItem } from "components/breadcrumb/LinkItem";
import { CurrentItem } from "components/breadcrumb/CurrentItem";

export default () => {
  return (
    <BaseLayout>
      <Helmet title="Settings" />
      <Hero>
        <Breadcrumb>
          <LinkItem href="/mypage">Profile</LinkItem>
          <CurrentItem>Settings</CurrentItem>
        </Breadcrumb>
        <h1>Settings</h1>
      </Hero>
      <Block>
        <Column col3>
          <Card href="/settings/profile">
            <Pen />
            <h3>Edit Profile</h3>
            <p>You can change the user name and icon.</p>
          </Card>
          <Card href="/settings/delete">
            <Delete />
            <h3>Delete Account</h3>
            <p>
              When you delete your account, all your existing data will be
              deleted.
            </p>
          </Card>
        </Column>
      </Block>
    </BaseLayout>
  );
};
