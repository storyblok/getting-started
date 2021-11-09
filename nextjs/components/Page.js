import DynamicComponent from "./DynamicComponent";
import { sbEditable } from "@storyblok/storyblok-editable";

const Page = ({ content }) => (
  <main className="px-6" {...sbEditable(content)}>
    {content.body.map((blok) => (
      <DynamicComponent blok={blok} key={blok._uid} />
    ))}
  </main>
);

export default Page;
