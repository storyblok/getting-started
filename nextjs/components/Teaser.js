import { storyblokEditable } from "@storyblok/react";

const Teaser = ({ blok }) => {
  return (
    <div className="py-8 mb-6" {...storyblokEditable(blok)} key={blok._uid}>
      <h2 className="text-5xl font-bold text-center"> {blok.headline} </h2>
    </div>
  );
};

export default Teaser;
