import React, { useState, useEffect, useRef, useCallback } from "react";
import { Helmet } from "react-helmet";

import { firebase } from "../../firebase";
import { storage } from "../../lib/firebase";

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
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const handleImage = (event) => {
    const image = event.target.files[0];
    setImage(image);
  };

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  const inputRef = useRef(null);

  const onClick = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }, [inputRef]);

  const onSubmit = (event) => {
    event.preventDefault();
    if (image === "") {
      console.log("ファイルが選択されていません");
    }

    // アップロード処理
    const uploadTask = storage.ref(`/images/${image.name}`).put(image);
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      next,
      error,
      complete
    );
  };

  const next = (snapshot: any) => {
    // 進行中のsnapshotを得る
    // アップロードの進行度を表示
    const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log(percent + "% done");
    console.log(snapshot);
  };
  const error = (error: any) => {
    // エラーハンドリング
    console.log(error);
  };

  const complete = () => {
    // 完了後の処理
    // 画像表示のため、アップロードした画像のURLを取得
    storage
      .ref("images")
      .child(image.name)
      .getDownloadURL()
      .then((fireBaseUrl: any) => {
        setImageUrl(fireBaseUrl);
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
        <Form onSubmit={onSubmit}>
          <FormItem>
            <Label>Your Name</Label>
            <Input placeholder={user && user.displayName} />
          </FormItem>
          <FormItem>
            <Label>Your Icon</Label>
            <Input
              ref={inputRef}
              src={user && user.photoURL}
              onChange={handleImage}
              onClick={onClick}
            />
          </FormItem>
          <FormItem>
            <Button>Save</Button>
          </FormItem>
        </Form>
      </Block>
    </BaseLayout>
  );
};
