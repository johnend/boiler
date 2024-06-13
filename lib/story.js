const story = (componentName, reactFlavour) => {
  if (reactFlavour === "typescript") {
    return `import { Meta } from '@storybook/react';
import ${componentName} from './${componentName}'

export default {
  // 🚨 make sure you update the path below!
  title: 'Your/Storybook/Path/${componentName}',
  component: ${componentName},
  argTypes: {}
} as Meta<typeof ${componentName}>
;

export const ${componentName}_Default = {
  args: {},
};`;
  }

  if (reactFlavour === "react") {
    return `import ${componentName} from './${componentName}'

export default {
  // 🚨 make sure you update the path below!
  title: 'Your/Storybook/Path/${componentName}',
  component: ${componentName},
}
;

export const ${componentName}_Default = {
  args: {},
};`;
  }
};

export default story;
