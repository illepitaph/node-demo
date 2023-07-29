const https = require("node:https");
// const crypto = require("node:crypto")

const MAX_CALLS = 4;

const start = Date.now();

for (let i = 0; i < MAX_CALLS; i++) {
  https.request("https://www.google.com", (res) => {
    res.on("data", () => {});
    res.on("end", () => {
      console.log(`Request: ${i + 1}`, Date.now() - start);
    });
  })
  .end();
}















/* const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
    // req.method => get post put patch delete
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About page");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        firstName: "Bruce",
        lastName: "Wayne",
      })
    );
  } else {
    res.writeHead(404);
    res.end("Page not found");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
}); */

// const fs = require("node:fs");
// const zlib = require("node:zlib");

// const gzip = zlib.createGzip()

// const readableStream = fs.createReadStream("./file.txt", {
//   encoding: "utf-8",
//   highWaterMark: 2,
// });

// readableStream.pipe(gzip).pipe(fs.writeStream("./file2.txt.gz"));

// const writeableStream = fs.createWriteStream("./file2.txt", {

// });

// readableStream.pipe(writeableStream);

// readableStream.on("data", (chunk) => {
//   console.log(chunk);
//   writeableStream.write(chunk);
// });

/* const fs = require("node:fs/promises");

async function readFile() {
  try {
    const data = await fs.readFile("file.txt", "utf-8");
    console.log(data);
  } catch(error) {
    console.log(error);
  }
}

readFile(); */

// fs.readFile("file.txt", "utf-8")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

/* const fs = require("node:fs");

console.log("First");
const fileContents = fs.readFileSync("./file.txt", "utf-8");

console.log(fileContents);

console.log("Second");

fs.readFile("./file.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

console.log("Third");

fs.writeFileSync("./greet.txt", "Hello world!");
fs.writeFile("./greet.txt", " Hello Vishwas!", {flag: "a"}, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("File written!!");
  }
});
 */

/* const PizzaShop = require("./pizza-shop");
const DrinkMachine = require("./drink-machine");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
    console.log(`Order received! Baking a ${size} pizza with ${topping}.`);
    drinkMachine.serveDrink(size);
});

pizzaShop.order("large", "mushrooms");
pizzaShop.displayOrderNumber(); */
/* 
// const EventEmitter = require("node:events");

// const emitter = new EventEmitter();

// emitter.on("order-pizza", (size, topping) => {
//     console.log(`Order received! Baking a ${size} pizza with ${topping}...`);
// } )

// emitter.on("order-pizza", (size) => {
//    if (size === "large") {
//     console.log(`Serving complementary drink...`)
//    }
// } )


// emitter.emit("order-pizza", "large", "mushroom"); */
