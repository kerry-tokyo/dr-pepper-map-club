import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { firebase } from "../firebase";

import BaseLayout from "components/layout/BaseLayout";
import { Hero } from "components/hero/Hero";

export default () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <BaseLayout>
      <Helmet title="My Page" />
      <Hero user icon={user && user.photoURL} name={user && user.displayName} />
    </BaseLayout>
  );
};
