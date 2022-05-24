import React from "react";
import { Anchor } from "@dracula/dracula-ui";

export default function NewSingle({ item }) {
  const { url, title, image } = item;
  return (
    <div className="item__container">
      <div className="item__image-container">
        <img src={image} alt={title} className="item__image" />
      </div>
      <div className="item_link-container">
        <Anchor href={url} target="_blank">
          {title}
        </Anchor>
      </div>
    </div>
  );
}
