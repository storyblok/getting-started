import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";

export default class extends React.Component {
  render() {
    const { blok } = this.props;

    return (
      <div className="py-8 mb-6" {...sbEditable(blok)} key={blok._uid}>
        <h2 className="text-5xl font-bold text-center"> {blok.headline} </h2>
      </div>
    );
  }
}
