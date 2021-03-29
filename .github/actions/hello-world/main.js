const core = require("@actions/core");

const firstGreeting = core.getInput("first-greeting");
const secondGreeting = core.getInput("second-greeting");
const thirdGreeting = core.getInput("third-greeting");

firstGreeting
  ? console.log(`Hello ${firstGreeting}`)
  : console.log(`first-greeting Missing`);
secondGreeting
  ? console.log(`Hello ${secondGreeting}`)
  : console.log(`second-greeting Missing`);
thirdGreeting
  ? console.log(`Hello ${secondGreeting}`)
  : console.log(`third-greeting Missing`);
