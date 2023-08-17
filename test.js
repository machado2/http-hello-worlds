function timeout(prom) {
  const timeout = new Promise((_, reject) => {
    setTimeout(() => reject(new Error("timeout")), 1000);
  });
  return Promise.race([timeout, prom]);
}

async function fetchy(url) {
  const response = await timeout(fetch(url));
  const text = await timeout(response.text());
  return text;
}

async function main() {
  const results = Array.from({ length: 9 }, (_, i) => i + 6080).map(
    async (i) => {
      const url = `http://localhost:${i}`;
      try {
        const result = await fetchy(url);
        console.log(`${url} => ${result}`);
        return `${url} => ${result}`;
      } catch (error) {
        console.log(`${url} => ${error}`);
        return `${url} => ${error}`;
      }
    }
  );
  const r = await Promise.all(results);
  console.log(r);
}

main();
