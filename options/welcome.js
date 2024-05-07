import chalk from "chalk";

const logo = `
888               ${chalk.red('d8b')} 888                  
888               ${chalk.red(`Y${chalk.yellow('8')}P`)} 888                  
888                   888                  
88888b.   .d88b.  888 888  .d88b.  888d888 
888 "88b d88""88b 888 888 d8P  Y8b 888P"   
888  888 888  888 888 888 88888888 888     
888 d88P Y88..88P 888 888 Y8b.     888     
88888P"   "Y88P"  888 888  "Y8888  888     
                                           `;

const greeting = `
${logo}
Hello 👋!

I'm Boiler, I'm here to help speed up your React workflow.
First I need to ask you a few questions about your project.
This will help me generate the right files for you!
`

const welcome = console.log(greeting)
export default welcome;
