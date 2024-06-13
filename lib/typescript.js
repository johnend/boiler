const tsx = (componentName, styling) => {
  return `import styles from './${componentName}.module.${styling}'

type ${componentName}Props = {}

const ${componentName} = ({props}: ${componentName}Props) => {
  return (
    <div className={styles.container}>${componentName}</div>
  )
}

export default ${componentName}
  `;
};

export default tsx;
