import React from "react";
import { Helmet } from "react-helmet";

import BaseLayout from "components/layout/BaseLayout";
import { Hero } from "components/hero/Hero";
import { Block } from "components/block/Block";

export default () => (
  <BaseLayout text>
    <Helmet title="Terms of Service" />
    <Hero>
      <h1>Terms of Service</h1>
      <p>Updated: August 25, 2020</p>
    </Hero>
    <Block>
      <h2>Using our Services</h2>
      <p>
        You must follow any policies made available to you within the Services.
      </p>
      <p>
        Don’t misuse our Services. For example, don’t interfere with our
        Services or try to access them using a method other than the interface
        and the instructions that we provide. You may use our Services only as
        permitted by law, including applicable export and re-export control laws
        and regulations. We may suspend or stop providing our Services to you if
        you do not comply with our terms or policies or if we are investigating
        suspected misconduct.
      </p>
      <p>
        Using our Services does not give you ownership of any intellectual
        property rights in our Services or the content you access. You may not
        use content from our Services unless you obtain permission from its
        owner or are otherwise permitted by law. These terms do not grant you
        the right to use any branding or logos used in our Services. Don’t
        remove, obscure, or alter any legal notices displayed in or along with
        our Services.
      </p>
      <p>
        Our Services display some content that is not the
        website-administrator‘s. This content is the sole responsibility of the
        entity that makes it available. We may review content to determine
        whether it is illegal or violates our policies, and we may remove or
        refuse to display content that we reasonably believe violates our
        policies or the law. But that does not necessarily mean that we review
        content, so please don’t assume that we do.
      </p>
      <p>
        In connection with your use of the Services, we may send you service
        announcements, administrative messages, and other information. You may
        opt out of some of those communications.
      </p>
      <p>
        Some of our Services are available on mobile devices. Do not use such
        Services in a way that distracts you and prevents you from obeying
        traffic or safety laws.
      </p>
    </Block>
  </BaseLayout>
);
