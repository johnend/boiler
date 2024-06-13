import fs from "fs";
import path from "path";
import toml from "@iarna/toml";

export const writeConfig = (settings) => {
  fs.writeFile(
    path.resolve(process.cwd(), "boiler.settings.toml"),
    toml.stringify(settings),
    "utf-8",
    (err) => {
      if (err) {
        console.error("🚨 Error" + err);
      } else {
        console.log(`🙌 Config file generated in ${process.cwd()}`);
      }
    },
  );
};
