import tsx from "./typescript.js";
import jsx from "./react.js";
import story from "./story.js";
import stylingBoilerPlate from "./styling.js";
import fs from "fs";

const writeFiles = (componentName, reactFlavor, stylingFlavor, storybook) => {
  const config = {
    componentName: componentName,
    reactExtension: reactFlavor === "react" ? ".jsx" : ".tsx",
    cssExtension: stylingFlavor === "css" ? ".module.css" : ".module.scss",
    storybookExtension: reactFlavor === "react" ? ".story.jsx" : ".story.tsx",
  };

  fs.writeFileSync(
    `${componentName}${config.reactExtension}`,
    reactFlavor === "react"
      ? jsx(componentName, stylingFlavor)
      : tsx(componentName, stylingFlavor),
  );

  fs.writeFileSync(
    `${componentName}${config.cssExtension}`,
    stylingBoilerPlate(stylingFlavor),
  );

  storybook &&
    fs.writeFileSync(
      `${componentName}${config.storybookExtension}`,
      story(componentName, reactFlavor),
    );
};

export default writeFiles;
