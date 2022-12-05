const parseArgs = () => {
  const args = process.argv.slice(2);
  const resultString = [];
  const pairArgs = args.reduce((acc, _, index) => {
    if (index % 2 === 0) {
      acc.push(args.slice(index, index + 2));
    }
    return acc;
  }, []);

  pairArgs.forEach((el) => {
    const [key, value] = el;
    resultString.push(`${key.replace("--", "")} is ${value}`);
  });

  console.log(resultString.join(", "));
};

parseArgs();
