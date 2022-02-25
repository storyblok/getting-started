import DynamicComponent from "./DynamicComponent";
import { storyblokEditable } from "@storyblok/js";

const Page = ({ blok }) => (
  <main className="px-6" {...storyblokEditable(blok)} key={blok._uid}>
    {blok.body.map((nestedBlok) => (
      <DynamicComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
