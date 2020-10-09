import SbEditable from "storyblok-react";

const Feature = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <div className="py-2">
        <h2 className="text-lg"> {blok.name} </h2>
      </div>
    </SbEditable>
  );
};

export default Feature;
