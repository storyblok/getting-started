import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const Grid = ({ blok }) => (
  <ul className="flex py-8 mb-6" {...storyblokEditable(blok)} key={blok._uid}>
    {blok.columns.map((blok) => (
      <li key={blok._uid} className="flex-auto px-6">
        <StoryblokComponent blok={blok} />
      </li>
    ))}
  </ul>
);

export default Grid;
