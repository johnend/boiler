# Boiler

Boiler is a small CLI tool that can help generate some boilerplate code for
React projects. The motivation for this is to remove the "blank page" feeling
when writing new components, and to help scaffold projects more easily.

## Installation

Boiler is not on the npm registry at this time, as it is still a work in
progress. To install and use locally please clone the repo and link the package.

```shell
gh repo clone johnend/boiler
```

After cloning run ` npm install` and finally within the repo run `npm link`

Then run `boiler` from your project's root directory.

## Usage

Your should run `boiler` for the first time in your front-end application's root
directory i.e. in the same directory as your `project.json` file or `.git`
folder.

On first run Boiler will:

- ask about your project setup (for the config file), and
  - the questions ask about whether you're using typescript, (s)css modules,
    storybook and where you UI components directory is (this should be relative
    to the root directory, which you should run boiler in),
- generate a config file.
  - if you are working on a team you can commit this file so that the settings
    are consistent for each engineer.

On subsequent runs:

`boiler` will ask you what the name of your component is and then generate a
directory, and the components, defined in your config.

Currently Boiler will only generate all the files in the same folder i.e. it
assumes your component folders are structured like this:

```
.
└── src/
    └── components/
        └── button/ --example
            ├── button.{j/t}sx
            ├── button.test.{j/t}sx --if test files are co-located (future
enhancement)
            ├── button.stories.{j/t}sx --if using storybook (configurable)
            ├── button.module.{s}css --if using scss modules (configurable)
            └── index.js -- if this is a sub-component of a UI component library (future enhancement)
```

### ToDo

- [x] Have some logic to branch if boiler has been run before i.e.
  - As a web developer building a project, when running boiler after the first
    time and a boiler config file exists, then boiler should only ask for a name
    for the component and not ask the config questions. Then, after providing
    the name boiler should generate the appropriate files based on the config.
- [ ] Have Boiler find package.json and create the config as a sibling without
      needing to _run_ Boiler in a specific directory for setup.
- [ ] Remove the need to run Boiler from project root directory (search up until
      .git is found)
- [ ] Look for a `components` directory and check, during setup, if this is what
      should be used
