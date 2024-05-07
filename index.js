#! /usr/bin/env node

import {program} from "commander";

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from "url";
import toml from '@iarna/toml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import welcome from './options/welcome.js';
import { prompt_react_flavour, prompt_styling, prompt_storybook } from "./options/prompts.js";

const settings = {
  reactType: prompt_react_flavour,
  cssType: prompt_styling,
  storybook: prompt_storybook,
}

console.log(settings)

fs.writeFile(path.resolve(process.cwd(), 'boiler.settings.toml'), toml.stringify(settings), 'utf-8', err => {
  if (err) {
    console.error('🚨 Error' + err);
  } else {
    console.log(`🙌 Config file generated in ${process.cwd()}`);
  }
});

console.log('‼️ Root dir ' + path.resolve('./'));

// program
//   .version("1.0.0")
//   .description
//   ("Boiler: A front end boiler plate generator")
//   .option("-n, --name <type>", "Add your name")
//   .action((options) => {
//     console.log(chalk.blue(`Hello, ${options.name}!`));
// });

program.parse(process.argv);
