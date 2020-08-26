import React from "react";
import { Helmet } from "react-helmet";

import BaseLayout from "components/layout/BaseLayout";
import { Hero } from "components/hero/Hero";
import { Block } from "components/block/Block";
import { Column } from "components/column/Column";
import { Card } from "components/card/Card";
import Delete from "../../assets/svg/icons/user-delete.svg";

export default () => {
  return (
    <BaseLayout>
      <Helmet title="Settings" />
      <Hero>
        <h1>Settings</h1>
      </Hero>
      <Block>
        <Column col3>
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
