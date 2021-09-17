import Component from "./DynamicComponent";
import { sbEditable } from "@storyblok/storyblok-editable";

const Grid = ({ blok }) => (
  <ul className="flex py-8 mb-6" {...sbEditable(blok)} key={blok._uid}>
    {blok.columns.map((blok) => (
      <li key={blok._uid} className="flex-auto px-6">
        <Component blok={blok} />
      </li>
    ))}
  </ul>
);

export default Grid;
