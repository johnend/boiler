const stylingBoilerPlate = (styling) => {
  switch (styling) {
    case "css":
      return `.container {
  display: flex;
}
`;
    case "scss":
      return `@use "styles/_variables.scss" as *;

.container {
  display: flex;
}
`;
    default:
      break;
  }
};

export default stylingBoilerPlate;
