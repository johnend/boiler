const jsx = (componentName, styling) => {
  return `import styles from './${componentName}.module.${styling}'

const ${componentName} = () => {
  return (
    <div className={styles.container}>${componentName}</div>
  )
}

export default ${componentName}
  `;
};

export default jsx;
