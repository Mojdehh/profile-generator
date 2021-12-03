const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Devani loves listening to Ludovico Einaudi while coding, devouring Yak Momos for brunch, prefers Tennis over any other sport, and is amazing at dropping mad puns at inopportune times.

rl.question('What is your name? ', (name) => {
  rl.question('What is an activity you like doing? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (music) => {
      rl.question('Which meal is your favourite ? ', (meal) => {
        rl.question('What is your favourite thing to eat for that meal? ', (food) => {
          rl.question('Which sport is your absolute favourite? ', (sports) => {
            rl.question('What is your superpower? ', (superpower) => {
              console.log(`${name} loves ${activity} while listening to ${music}, devouring ${food} for ${meal}, prefers ${sports} over any other sport, and is amazing at ${superpower}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
