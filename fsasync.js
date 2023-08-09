const { readFile, writeFile } = require("fs");

console.log("start");

readFile("./content/first.txt", "utf8", (err, res) => {
  if (err) return;

  const first = res;

  readFile("./content/second.txt", "utf8", (err, res) => {
    if (err) return;

    const second = res;

    writeFile(
      "./content/result-sync.txt",
      `here is the result ${first}, ${second}`,
      (err, res) => {
        if (err) return;

        console.log(res);
      }
    );
  });
});

console.log("done with this task");
