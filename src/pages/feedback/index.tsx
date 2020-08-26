import React from "react";
import { Helmet } from "react-helmet";

import BaseLayout from "components/layout/BaseLayout";
import { Hero } from "components/hero/Hero";
import { Block } from "components/block/Block";
import { Form } from "components/form/Form";
import { TextArea } from "components/form/TextArea";
import { FormItem } from "components/form/FormItem";
import { Button } from "components/button/Button";

export default () => {
  return (
    <BaseLayout text>
      <Helmet title="Feedback" />
      <Hero>
        <h1>Feedback</h1>
        <p>
          Does your service have any features you need? If you have other needs,
          please contact us using this form.
        </p>
      </Hero>
      <Block>
        <Form
          name="feedback"
          netlify="true"
          method="post"
          action="/feedback/send"
        >
          <FormItem></FormItem>
          <FormItem>
            <TextArea
              name="Message"
              placeholder="Please provide specific feedback."
            />
          </FormItem>
          <FormItem>
            <Button type="submit">Send</Button>
          </FormItem>
        </Form>
      </Block>
    </BaseLayout>
  );
};
