import { storyblokEditable } from "@storyblok/react";

const Feature = ({ blok }) => {
  return (
    <div className="py-2" {...storyblokEditable(blok)} key={blok._uid}>
      <h2 className="text-lg"> {blok.name} </h2>
    </div>
  );
};

export default Feature;
