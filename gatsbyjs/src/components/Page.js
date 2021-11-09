import React from "react";
import Component from "./DynamicComponent";
import { sbEditable } from "@storyblok/storyblok-editable";

const Page = ({ blok }) => (
  <main className="px-6" {...sbEditable(blok)} key={blok._uid}>
    {blok.body.map((blok) => (
      <Component blok={blok} key={blok._uid} />
    ))}
  </main>
);

export default Page;
