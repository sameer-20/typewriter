// Output sentence as a typewriting animation

const typeWriter = function (sentence) {

  sentence += '\n';  
  let count = 0;

  for (const char of sentence) {
    count += 50;
    setTimeout (() => {
      process.stdout.write(char); // To print output in one line
    }, count);
  }
};


typeWriter ("hello there from lighthouse labs");
