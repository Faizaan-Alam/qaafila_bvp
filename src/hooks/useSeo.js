import { useEffect } from "react";
import { site } from "../data/site";
function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}
function upsertLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
}
export default function useSeo({
  title,
  description = site.description,
  path = "/",
  image = "/qaafila-logo.png",
  type = "website",
}) {
  useEffect(() => {
    const fullTitle = title ? `${title} - Qaafila` : site.title;
    const url = `https://qaafila.example${path}`;
    document.title = fullTitle;
    upsertMeta('meta[name="description"]', {
      name: "description",
      content: description,
    });
    upsertMeta('meta[name="keywords"]', {
      name: "keywords",
      content: site.keywords.join(", "),
    });
    upsertLink("canonical", url);
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: type,
    });
    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: fullTitle,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: image,
    });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: url });
    upsertMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: "Qaafila",
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: fullTitle,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });
    upsertMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: image,
    });
  }, [title, description, path, image, type]);
}
