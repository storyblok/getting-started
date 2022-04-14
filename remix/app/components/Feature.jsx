import { storyblokEditable } from "@storyblok/react";

const Feature = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <h2>{blok.name}</h2>
    </div>
  );
};

export default Feature;
