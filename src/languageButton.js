import React from "react";

import { LanguageContext } from "./languageContext";

class LanguageButton extends React.Component {
  render() {
    return <div>{this.context.title}</div>;
  }
}

LanguageButton.contextType = LanguageContext;

export default LanguageButton;
