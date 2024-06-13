import chalk from "chalk";
import select, { Separator } from "@inquirer/select";
import input from "@inquirer/input";
import colors from "../variables/colors.js";

export const prompt_react_flavour = async () =>
  await select({
    message: `Does your project use ${chalk.yellow("React")}, or ${chalk.blue("TypeScript")} with React?`,
    choices: [
      {
        name: "React",
        value: "react",
        description: "Generates *.jsx and *.js files",
      },
      {
        name: "TypeScript",
        value: "typescript",
        description: "Generates *.tsx and *.ts files",
      },
      new Separator(),
    ],
  });

const styled = [
  {
    letter: "s",
    color: colors.mauve,
  },
  {
    letter: "t",
    color: colors.red,
  },
  {
    letter: "y",
    color: colors.peach,
  },
  {
    letter: "l",
    color: colors.green,
  },
  {
    letter: "e",
    color: colors.sapphire,
  },
];

const stylish = styled
  .map((style) => chalk.hex(style.color)(style.letter))
  .join("");

export const prompt_styling = async () =>
  await select({
    message: `How do you ${stylish} your components?`,
    choices: [
      {
        name: "CSS modules",
        value: "css",
        description: "Generates *.module.css files",
      },
      {
        name: "SCSS modules",
        value: "scss",
        description: "Generates *.module.scss files",
      },
      {
        name: "Tailwind/CSSinJS",
        value: "",
        description: "Doesn't generate any additional files",
      },
      new Separator(),
    ],
  });

export const prompt_storybook = async () =>
  await select({
    message: `Do you want to generate ${chalk.magenta("Storybook")} stories?`,
    choices: [
      {
        name: "Yes, please",
        value: true,
        description: `Generates *.stories.${prompt_react_flavour == "react" ? "jsx" : "tsxv"} files`,
      },
      {
        name: "No, thanks",
        value: false,
        description: "No Story file generation",
      },
      new Separator(),
    ],
  });

export const prompt_components_dir = async () =>
  await input({
    message: `What is your UI component sub-directory?`,
  });

export const prompt_component_name = async () =>
  await input({
    message: `What is your component called?`,
  });
