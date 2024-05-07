# Boiler

Boiler is a small CLI tool that can help generate some boilerplate code for React projects.
The motivation for this is to remove the "blank page" feeling when writing new components, and to help scaffold projects more easily.

## Installation

`npm i -g boiler`

## Usage

Your should run `boiler` for the first time in your front-end's root directory i.e. in the same directory as your project.json file.

On first run Boiler will:
- ask about your project setup (for the config file), and
- generate a config file.

Running `boiler <component name>` in a different directory (after setup) will create a folder structure based on your config, like the example below.

On subsequent runs Boiler will (when run in a parent directory):
- create a component folder,
- create files within that folder based on the config settings,

Currently Boiler will only generate all the files in the same folder. I.e. it assumes your component folders are structured like this:
```
.
└── src/
    └── components/
        └── button/ --example
            ├── button.tsx
            ├── button.test.tsx --if test files are co-located (configurable)
            ├── button.stories.tsx --if using storybook (configurable)
            ├── button.module.scss --if using scss modules (configurable)
            └── index.js -- if this is a sub-component of a UI component library (configurable)
```

### ToDo
- [ ] Have Boiler find package.json and create the config as a sibling without needing to _run_ Boiler in a specific directory for setup.
