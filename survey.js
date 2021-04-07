const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable. ", (answer) => {
  const name = answer;
  rl.question("What's an acitivity you like doing ", (answer) => {
    const activity = answer;
    rl.question("What do you listen to while doing that? ", (answer) => {
      const music = answer;
      rl.question("Which company would you like to work at? ", (answer) => {
        const job = answer;
        rl.question("What are you qualifications ", (answer) => {
          const qualifications = answer;
          console.log(`${name} has a range of past times, some of which include ${activity} and while doing said activities, they like to listen to ${music}. Their goal is to work at a company such as the following: ${job}. They plan to achieve this goal with thier qualifications in ${qualifications}.`);
          rl.close();
        });
      });
    });
  });
});