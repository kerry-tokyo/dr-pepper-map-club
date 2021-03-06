import favicon from "images/favicon.png";

const title = "Dr Pepper Map Club";
const description =
  "Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.";

export const helmet = {
  title,
  titleTemplate: "%s - Dr Pepper Map Club",
  htmlAttributes: { lang: "jp" },
  meta: [
    { name: "description", content: description },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, user-scalable=no",
    },
    { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    { name: "msapplication-navbutton-color", content: "#000" },
    { name: "msapplication-TileColor", content: "#000" },
    { name: "theme-color", content: "#000" },

    { property: "og:title", content: title },
    { property: "og:image:width", content: "880px" },
    { property: "og:image:height", content: "440px" },
    { property: "og:image:alt", content: description },

    { name: "twitter:title", content: title },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:description", content: description },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: favicon }],
};
