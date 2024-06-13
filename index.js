#!/usr/bin/env node

import { program } from "commander";
import fs from "fs";
import path from "path";
import TOML from "@iarna/toml";

import welcome from "./options/welcome.js";

import {
  prompt_react_flavour,
  prompt_styling,
  prompt_storybook,
  prompt_component_name,
} from "./options/configPrompts.js";
import { writeConfig } from "./lib/writeConfig.js";
import { prompt_components_dir } from "./options/configPrompts.js";
import writeFiles from "./lib/writeFiles.js";

fs.stat("boiler.settings.toml", async (err) => {
  if (err == null) {
    const config = TOML.parse(
      fs.readFileSync("boiler.settings.toml", "utf8"),
      (err) => {
        err && console.error(`🚨 Error couldn't find config file!`);
      },
    );
    console.log("🔥 Boiler configuration file found 🙌");
    console.log("Switching to " + config.componentDir);

    try {
      const componentName = await prompt_component_name();
      process.chdir(config.componentDir);
      fs.mkdir(path.join("./", componentName), (err) => {
        if (err) return console.error(err);
        console.log(componentName + " directory created 📁");
        process.chdir(path.join("./", componentName));
        try {
          writeFiles(
            componentName,
            config.reactType,
            config.cssType,
            config.storybook,
          );
          console.log(`${componentName} boilerplate files created 🎉`);
        } catch (error) {
          console.error("🚨 Error writing files");
        }
      });
    } catch (error) {
      console.error(`🚨 Couldn't change directory, Boiler was closed \n`);
    }
  } else if (err.code === "ENOENT" && err.path === "boiler.settings.toml") {
    welcome();

    const settings = {
      reactType: undefined,
      cssType: undefined,
      storybook: undefined,
      componentDir: undefined,
    };

    try {
      settings.reactType = await prompt_react_flavour();
      settings.cssType = await prompt_styling();
      settings.storybook = await prompt_storybook();
      settings.componentDir = await prompt_components_dir();
      writeConfig(settings);
    } catch (e) {
      console.error("🚨 Error", e);
    }
  } else {
    console.error("🚨 Boiler Error", err);
  }
});

program.parse(process.argv);
