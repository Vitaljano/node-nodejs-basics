const parseEnv = () => {
  const env = Object.entries(process.env)
    .filter((entry) => {
      const [key] = entry;
      if (key.includes("RSS_")) return entry;
    })
    .map((entry) => entry.join("="));
  console.log(env.join("; "));
};

parseEnv();
